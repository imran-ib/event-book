/* global google */
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import Script from "react-load-script";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import cuid from "cuid";
import moment from "moment";
import TextInputField from "../../../common/form/TextInputField";
import TextArea from "../../../common/form/TextArea";
import SelectInput from "../../../common/form/SelectInput";
import DateInput from "../../../common/form/DateInput";
import PlacesInput from "../../../common/form/googlePlacesInput";
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from "revalidate";
import {
  createEvent,
  updateEvent
} from "../../../features/events/eventActions";

class EventForm extends Component {
  state = {
    cityLatLng: {},
    venueLatLng: {},
    scriptLoader: false
  };

  handleSctipt = () => {
    this.setState({
      scriptLoader: true
    });
  };
  handleCitySelect = CityAddress => {
    geocodeByAddress(CityAddress)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setState({ cityLatLng: latLng }))
      .then(() => {
        this.props.change("city", CityAddress);
      })
      .catch(error => console.error("Error", error));
  };

  handleVenueSelect = VenueAddress => {
    geocodeByAddress(VenueAddress)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setState({ venueLatLng: latLng }))
      .then(() => {
        this.props.change("venue", VenueAddress);
      })
      .catch(error => console.error("Error", error));
  };

  onFormSubmit = values => {
    values.date = moment(values.date).format();
    values.venueLatLng = this.state.venueLatLng;
    if (this.props.initialValues.id) {
      this.props.updateEvent(values);
      this.props.history.goBack();
    } else {
      const newEvent = {
        ...values,
        id: cuid(),
        hostPhotoURL: "/assets/images/user.png",
        hostedBy: "Bob"
      };
      this.props.createEvent(newEvent);
      this.props.history.push("/events");
    }
  };

  render() {
    const { invalid, pristine, submitting } = this.props;
    return (
      <Grid>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyAU4OfA4t7er9vQfE5Z50_MLFwOOiqxrnw&libraries=places"
          onLoad={this.handleSctipt}
        />

        <Grid.Column width={10}>
          <Segment>
            <Header sub color="teal" content="Event Details" />
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
              <Field
                name="title"
                type="text"
                component={TextInputField}
                placeholder="Give your event a name"
              />
              <Field
                name="category"
                type="text"
                component={SelectInput}
                options={category}
                placeholder="What is your event about"
              />
              <Field
                name="description"
                type="text"
                component={TextArea}
                rows={3}
                placeholder="Tell us about your event"
              />
              <Header sub color="teal" content="Event Location details" />
              <Field
                name="city"
                type="text"
                component={PlacesInput}
                options={{ types: ["(cities)"] }}
                placeholder="Event city"
                onSelect={this.handleCitySelect}
              />
              {this.state.scriptLoader && (
                <Field
                  name="venue"
                  type="text"
                  component={PlacesInput}
                  options={{
                    location: new google.maps.LatLng(this.state.cityLatLng),
                    radius: 1000,
                    types: ["establishment"]
                  }}
                  placeholder="Event venue"
                  onSelect={this.handleVenueSelect}
                />
              )}
              <Field
                name="date"
                type="text"
                component={DateInput}
                dateFormat="YYYY-MM-DD HH:mm"
                timeFormat="HH:mm"
                showTimeSelect
                placeholder="Date and time of event"
              />
              <Button
                disabled={invalid || submitting || pristine}
                positive
                type="submit"
              >
                Submit
              </Button>
              <Button onClick={this.props.history.goBack} type="button">
                Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

const validate = combineValidators({
  title: isRequired({ message: "The Title Is Required" }),
  category: isRequired({ message: "Please Provide Category" }),
  description: composeValidators(
    isRequired({ message: "Please Enter a description" }),
    hasLengthGreaterThan(6)({
      message: " Description must be atleast 6 characters"
    })
  )(),
  city: isRequired("city"),
  venue: isRequired("venue"),
  date: isRequired("date")
});

const category = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" }
];

const actions = {
  createEvent,
  updateEvent
};

const mapState = (state, prevProps) => {
  const eventId = prevProps.match.params.id;
  let event = {};
  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }
  return {
    initialValues: event
  };
};

export default connect(
  mapState,
  actions
)(
  reduxForm({ form: "eventForm", enableReinitialize: true, validate })(
    EventForm
  )
);
