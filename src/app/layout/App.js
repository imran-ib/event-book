import React, { Component } from "react";
import { Container } from "semantic-ui-react";

//Components
import EventDashboard from "../../features/events/EventDashboard/eventDashboard";
import Navbar from "../../features/nav/NavBar/navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container className="main">
          <EventDashboard />
        </Container>
      </div>
    );
  }
}

export default App;
