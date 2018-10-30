import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import { updateEvent, deleteEvent } from "../eventActions";
import { Grid } from "semantic-ui-react";
//Components
import EventList from "../EventList/eventList";
import EventActivity from "../eventActivity/eventActivity";
import LoadingComponent from "../../../app/layout/loadingComponent";

class EventDashboard extends Component {
  handdleDeleteEvent = eventId => () => this.props.deleteEvent(eventId);

  render() {
    const { events, loading } = this.props;
    if (loading) return <LoadingComponent inverted={true} />;
    return (
      <Grid>
        <Grid.Column width={10}>
          {events &&
            events.map(event => (
              <EventList
                handdleDeleteEvent={this.handdleDeleteEvent}
                key={event.id}
                event={event}
              />
            ))}
        </Grid.Column>
        <Grid.Column width={6}>
          <EventActivity />
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    events: state.firestore.ordered.events,
    loading: state.async.loading
  };
};

const actions = {
  updateEvent,
  deleteEvent
};

export default connect(
  mapStateToProps,
  actions
)(firestoreConnect([{ collection: "events" }])(EventDashboard));
