import React, { Component } from "react";
import { Menu, Image, Dropdown } from "semantic-ui-react";

export class SignedIn extends Component {
  render() {
    console.log(this.props);
    return (
      <Menu.Item position="right">
        <Image avatar spaced="right" src="/assets/images/user.png" />
        <Dropdown pointing="top left" text="Username">
          <Dropdown.Menu>
            <Dropdown.Item text="Create Event" icon="plus" />
            <Dropdown.Item text="My Events" icon="calendar" />
            <Dropdown.Item text="My Network" icon="users" />
            <Dropdown.Item text="My Profile" icon="user" />
            <Dropdown.Item text="Settings" icon="settings" />
            <Dropdown.Item
              onClick={this.props.SignedOut}
              text="Sign Out"
              icon="power"
            />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    );
  }
}

export default SignedIn;
