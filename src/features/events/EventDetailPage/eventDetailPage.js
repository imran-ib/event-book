import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";

//Components
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedChat from "./EventDetailedChat";
import EventDetailedSidebar from "./EventDetailedSidebar";

export class EventDetail extends Component {
  render() {
    const { event } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventDetailedHeader event={event} />
          <EventDetailedInfo event={event} />
          <EventDetailedChat />
        </Grid.Column>
        <Grid.Column width={6}>
          <EventDetailedSidebar attendees={event.attendees} />
        </Grid.Column>
      </Grid>
    );
  }
}

const mapState = (state, prevProps) => {
  // get the eevent Id
  const eventId = prevProps.match.params.id;

  // create empty Event

  let event = {};

  //check if the event eventId exist
  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id !== eventId)[0];
  }
  return {
    event
  };
};

export default connect(mapState)(EventDetail);
