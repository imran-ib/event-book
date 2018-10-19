import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
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
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import cuid from "cuid";
import moment from "moment";
import TextInputField from "../../../common/form/TextInputField";
import TextArea from "../../../common/form/TextArea";
import SelectInput from "../../../common/form/SelectInput";
import DateInput from "../../../common/form/DateInput";

class EventForm extends Component {
  onFormSubmit = values => {
    values.date = moment(values.date).format();
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
        <Grid.Column width={10}>
          <Segment>
            <Header sub color="teal" content="Event Deatail" />
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
              <Field
                name="title"
                component={TextInputField}
                placeholder="Give Your Event a name"
              />
              <Field
                name="category"
                component={SelectInput}
                options={category}
                placeholder="What is your event about"
              />
              <Field
                name="description"
                rows={3}
                component={TextArea}
                placeholder="Tell us About your event"
              />
              <Header sub color="teal" content="Event location details" />
              <Field
                name="city"
                component={TextInputField}
                placeholder="Event City"
              />
              <Field
                name="venue"
                component={TextInputField}
                placeholder="Event Venue"
              />
              <Field
                name="date"
                dateFormat="DD-MM-YYYY HH:mm"
                timeFormat="HH:mm"
                showTimeSelect
                component={DateInput}
                placeholder="Event Date"
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
