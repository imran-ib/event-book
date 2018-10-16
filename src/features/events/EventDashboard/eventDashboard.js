import React, { Component } from "react";
import { connect } from "react-redux";
import { createEvent, updateEvent, deleteEvent } from "../eventActions";
import { Grid, Button } from "semantic-ui-react";
import cuid from "cuid";
//Components
import EventForm from "../EventForm/eventForm";
import EventList from "../EventList/eventList";

class EventDashboard extends Component {
  state = {
    selectedEvent: null,
    isOpen: false
  };
  handdleCakncelEventForm = () => {
    this.setState({
      isOpen: false
    });
  };
  handdleEventForm = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  handdleCreateNewEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "./assets/images/user.png";
    this.props.createEvent(newEvent);
    this.setState({
      selectedEvent: null,
      isOpen: !this.state.isOpen
    });
  };

  handlleUpdateEvent = updatedEvent => {
    this.props.updateEvent(updatedEvent);
    this.setState({
      isOpen: false,
      selectedEvent: null
    });
  };

  handdleViewForm = EventToBeUpdate => () => {
    this.setState({
      selectedEvent: EventToBeUpdate,
      isOpen: true
    });
  };
  handdleDeleteEvent = eventId => () => this.props.deleteEvent(eventId);

  render() {
    const { isOpen } = this.state;
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          {events.map(event => (
            <EventList
              handdleDeleteEvent={this.handdleDeleteEvent}
              handdleViewForm={this.handdleViewForm}
              key={event.id}
              event={event}
            />
          ))}
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handdleEventForm}
            content="Create Event"
            positive
          />
          {isOpen && (
            <EventForm
              handlleUpdateEvent={this.handlleUpdateEvent}
              selectedEvent={this.state.selectedEvent}
              handdleCreateNewEvent={this.handdleCreateNewEvent}
              handdleCakncelEventForm={this.handdleCakncelEventForm}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    events: state.events
  };
};

const actions = {
  createEvent,
  updateEvent,
  deleteEvent
};

export default connect(
  mapStateToProps,
  actions
)(EventDashboard);
