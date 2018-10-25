import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";

//Components
import EventDashboard from "../../features/events/EventDashboard/eventDashboard";
import Navbar from "../../features/nav/NavBar/navbar";
import Home from "../../features/Home/Home";
import EventDetailPage from "../../features/events/EventDetailPage/eventDetailPage";
import PeopleDashboard from "../../features/User/PeopleDashboard/PeopleDashboard";
import UserDetail from "../../features/UserDetail/userDetailPage";
import EventForm from "../../features/events/EventForm/eventForm";
import SettingsDashboard from "../../features/Settings/SettingDashboard";
import Test from "../../features/testComponet/Test";
import ModalsManager from "../../features/modals/modalManager";

class App extends Component {
  render() {
    return (
      <div>
        <ModalsManager />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => (
            <div>
              <Navbar />
              <Container className="main">
                <Switch>
                  <Route path="/events" component={EventDashboard} />
                  <Route path="/event/:id" component={EventDetailPage} />
                  <Route path="/manage/:id" component={EventForm} />
                  <Route path="/people" component={PeopleDashboard} />
                  <Route path="/settings" component={SettingsDashboard} />
                  <Route path="/profile/:id" component={UserDetail} />
                  <Route path="/createEvent" component={EventForm} />
                  <Route path="/test" component={Test} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;

// AIzaSyAU4OfA4t7er9vQfE5Z50_MLFwOOiqxrnw
