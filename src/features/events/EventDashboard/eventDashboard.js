import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import cuid from "cuid";

//Components
import EventList from "../EventList/eventList";
import EventForm from "../EventForm/eventForm";

export class EventDashboard extends Component {
  state = {
    events: events,
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
      isOpen: false
    });
  };

  render() {
    const { events, isOpen } = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          {events.map(event => (
            <EventList key={event.id} event={event} />
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
    date: "2018-03-27T11:00:00+00:00",
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
    date: "2018-03-28T14:00:00+00:00",
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
