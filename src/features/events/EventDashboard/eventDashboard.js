import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import cuid from "cuid";

//Components
import EventList from "../EventList/eventList";
import EventForm from "../EventForm/eventForm";

export class EventDashboard extends Component {
  state = {
    events: events,
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
    const newCreatedEvent = [...this.state.events, newEvent];
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "./assets/images/user.png";
    this.setState({
      events: newCreatedEvent,
      selectedEvent: null,
      isOpen: !this.state.isOpen
    });
  };

  handlleUpdateEvent = updatedEvent => {
    this.setState({
      events: this.state.events.map(event => {
        if (event.id === updatedEvent.id) {
          return Object.assign({}, updatedEvent);
        } else {
          return event;
        }
      }),
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
  handdleDeleteEvent = eventId => () => {
    const filteredEvents = this.state.events.filter(e => {
      return e.id !== eventId;
    });
    this.setState({
      events: filteredEvents
    });
  };

  render() {
    const { events, isOpen } = this.state;
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

const events = [
  {
    id: "1",
    title: "Trip to Tower of London",
    date: "2018-03-27",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: "Bob",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      }
    ]
  },
  {
    id: "2",
    title: "Trip to Punch and Judy Pub",
    date: "2018-03-28",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Punch & Judy, Henrietta Street, London, UK",
    hostedBy: "Tom",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    attendees: [
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      }
    ]
  }
];

export default EventDashboard;
