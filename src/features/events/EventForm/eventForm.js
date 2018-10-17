import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createEvent,
  updateEvent
} from "../../../features/events/eventActions";
import { Segment, Form, Button } from "semantic-ui-react";
import cuid from "cuid";

export class EventForm extends Component {
  state = {
    event: Object.assign({}, this.props.event)
  };

  onSubmit = e => {
    e.preventDefault();

    const newEvent = {
      ...this.state.event,
      id: cuid(),
      hostPhotoURL: "assets/images/user.png"
    };
    if (this.state.event.id) {
      this.props.updateEvent(this.state.event);
      this.props.history.goBack();
    } else {
      this.props.createEvent(newEvent);
      this.props.history.push("/events");
    }
  };

  onChange = e => {
    const newEvent = this.state.event;
    newEvent[e.target.name] = e.target.value;

    this.setState({
      event: newEvent
    });
  };
  render() {
    console.log(this.state);
    const { handdleCakncelEventForm } = this.props;
    const { title, date, city, venue, hostedBy } = this.state.event;
    return (
      <Segment>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input
              name="title"
              onChange={this.onChange}
              value={title}
              placeholder="Enter Title"
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              name="date"
              onChange={this.onChange}
              value={date}
              type="date"
              placeholder="Event Date"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name="city"
              onChange={this.onChange}
              value={city}
              placeholder="City event is taking place"
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name="venue"
              onChange={this.onChange}
              value={venue}
              placeholder="Enter the Venue of the event"
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name="hostedBy"
              onChange={this.onChange}
              value={hostedBy}
              placeholder="Enter the name of person hosting"
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={this.props.history.goBack} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

const actions = {
  createEvent,
  updateEvent
};

const mapState = (state, prevProps) => {
  const eventId = prevProps.match.params.id;
  let event = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: ""
  };
  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }
  return {
    event
  };
};

export default connect(
  mapState,
  actions
)(EventForm);
