import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import { Switch, Route, Redirect } from "react-router-dom";
import { updateProfile } from "../User/userActions";

//Settings Components
import SettingsNav from "./SettingsNav";
import About from "./About";
import Account from "./Account";
import BasicPage from "./BasicPage";
import PhotosPage from "./PhotosPage";

const actions = {
  updateProfile
};

class SettingsDashboard extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={12}>
          <Switch>
            <Redirect exact from="settings" to="settings/basic" />
            <Route
              path="/settings/about"
              render={() => (
                <About
                  updateProfile={this.props.updateProfile}
                  initialValues={this.props.user}
                />
              )}
            />
            <Route
              path="/settings/basic"
              render={() => (
                <BasicPage
                  updateProfile={this.props.updateProfile}
                  initialValues={this.props.user}
                />
              )}
            />
            <Route path="/settings/photos" render={() => <PhotosPage />} />
            <Route path="/settings/account" render={() => <Account />} />
          </Switch>
        </Grid.Column>

        <Grid.Column width={4}>
          <SettingsNav />
        </Grid.Column>
      </Grid>
    );
  }
}
const mapState = state => ({
  user: state.firebase.profile
});

export default connect(
  mapState,
  actions
)(SettingsDashboard);
