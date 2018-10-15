import React, { Component } from "react";
import { Segment, Item, List, Icon, Button } from "semantic-ui-react";
import EventAttendee from "./eventAtendee";

export class EventListItem extends Component {
  render() {
    const { event, handdleViewForm, handdleDeleteEvent } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header as="a">{event.title}</Item.Header>
                <Item.Description>
                  Hosted by <a>{event.hostedBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {event.date} |<Icon name="marker" />{" "}
            {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {event.antendee &&
              event.attendees.map(antendee => (
                <EventAttendee key={antendee.id} antendee={antendee} />
              ))}
          </List>
        </Segment>
        <Segment clearing>
          <span>{event.description}</span>
          <Button
            onClick={handdleDeleteEvent(event.id)}
            as="a"
            color="red"
            floated="right"
            content="Delete"
          />
          <Button
            onClick={handdleViewForm(event)}
            as="a"
            color="teal"
            floated="right"
            content="View"
          />
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;
