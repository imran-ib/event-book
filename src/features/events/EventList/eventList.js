import React, { Component } from "react";
import EventListItem from "./eventListItem";

export class EeventList extends Component {
  render() {
    return (
      <div>
        <EventListItem
          handdleDeleteEvent={this.props.handdleDeleteEvent}
          event={this.props.event}
        />
      </div>
    );
  }
}

export default EeventList;
