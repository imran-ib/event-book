import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

//Empty State
const emptyEvent = {
  events: {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: ""
  }
};

export class EventForm extends Component {
  state = emptyEvent;

  componentDidMount = () => {
    if (this.props.selectedEvent !== null) {
      this.setState({
        events: this.props.selectedEvent
      });
    }
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.selectedEvent !== this.props.selectedEvent) {
      this.setState({
        events: nextProps.selectedEvent || emptyEvent
      });
    }
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.state.events.id) {
      this.props.handlleUpdateEvent(this.state.events);
    } else {
      this.props.handdleCreateNewEvent(this.state.events);
    }
  };

  onChange = e => {
    const newEvent = this.state.events;
    newEvent[e.target.name] = e.target.value;

    this.setState({
      events: newEvent
    });
  };
  render() {
    const { handdleCakncelEventForm } = this.props;
    const { title, date, city, venue, hostedBy } = this.state.events;
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
          <Button onClick={handdleCakncelEventForm} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
