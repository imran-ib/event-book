import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { Switch, Route, Redirect } from "react-router-dom";

//Settings Components
import SettingsNav from "./SettingsNav";
import About from "./About";
import Account from "./Account";
import BasicPage from "./BasicPage";
import PhotosPage from "./PhotosPage";

export class SettingsDashboard extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={12}>
          <Switch>
            <Redirect exact from="settings" to="settings/basic" />
            <Route path="/settings/about" component={About} />
            <Route path="/settings/basic" component={BasicPage} />
            <Route path="/settings/photos" component={PhotosPage} />
            <Route path="/settings/account" component={Account} />
          </Switch>
        </Grid.Column>

        <Grid.Column width={4}>
          <SettingsNav />
        </Grid.Column>
      </Grid>
    );
  }
}

export default SettingsDashboard;
