import React, { Component } from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { Menu, Container, Button } from "semantic-ui-react";
import SigedOut from "../../Menues/SignedOut";
import SignedIn from "../../Menues/SignedIn";

export class Navbar extends Component {
  state = {
    authenticated: false
  };

  handdleSingIn = () => {
    this.setState({
      authenticated: true
    });
  };
  handdleSingOut = () => {
    this.setState({
      authenticated: false
    });
    this.props.history.push("/");
  };
  render() {
    const { authenticated } = this.state;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={Link} to="/" header>
            <img src="/assets/images/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />
          {authenticated && (
            <Menu.Item as={NavLink} to="/people" name="People" />
          )}
          {authenticated && (
            <Menu.Item>
              <Button
                to="/createEvent"
                floated="right"
                positive
                inverted
                content="Create Event"
              />
            </Menu.Item>
          )}
          {authenticated ? (
            <SignedIn SignedOut={this.handdleSingOut} />
          ) : (
            <SigedOut SignedIn={this.handdleSingIn} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(Navbar);
