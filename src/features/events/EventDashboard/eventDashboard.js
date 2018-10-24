import React, { Component } from "react";
import { connect } from "react-redux";
import { updateEvent, deleteEvent } from "../eventActions";
import { Grid } from "semantic-ui-react";
//Components
import EventList from "../EventList/eventList";

class EventDashboard extends Component {
  handdleDeleteEvent = eventId => () => this.props.deleteEvent(eventId);

  render() {
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          {events.map(event => (
            <EventList
              handdleDeleteEvent={this.handdleDeleteEvent}
              key={event.id}
              event={event}
            />
          ))}
        </Grid.Column>
        <Grid.Column width={6} />
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
  updateEvent,
  deleteEvent
};

export default connect(
  mapStateToProps,
  actions
)(EventDashboard);
