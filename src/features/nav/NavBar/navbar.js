import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, Link, withRouter } from "react-router-dom";
import { Menu, Container, Button } from "semantic-ui-react";
import SigedOut from "../../Menues/SignedOut";
import SignedIn from "../../Menues/SignedIn";
import { openModal } from "../../modals/ModalActions";
import { LogoutUser } from "../../auth/AuthActions";
const actions = {
  openModal,
  LogoutUser
};

export class Navbar extends Component {
  state = {
    authenticated: false
  };
  handdleSingIn = () => {
    this.props.openModal("LoginModal");
  };
  handleRegister = () => {
    this.props.openModal("RegisterModal");
  };
  handdleSingOut = () => {
    this.props.LogoutUser();
    this.props.history.push("/");
  };
  render() {
    const { auth } = this.props;
    const authenticated = auth.authenticated;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={Link} to="/" header>
            <img src="/assets/images/logo.png" alt="logo" />
            Event Book
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />
          <Menu.Item as={NavLink} to="/test" name="Test" />
          {authenticated && (
            <Menu.Item as={NavLink} to="/people" name="People" />
          )}
          {authenticated && (
            <Menu.Item>
              <Button
                as={Link}
                to="/createEvent"
                floated="right"
                positive
                inverted
                content="Create Event"
              />
            </Menu.Item>
          )}
          {authenticated ? (
            <SignedIn
              currentUser={auth.currentUser}
              SignedOut={this.handdleSingOut}
            />
          ) : (
            <SigedOut
              handleRegister={this.handleRegister}
              SignedIn={this.handdleSingIn}
            />
          )}
        </Container>
      </Menu>
    );
  }
}

const mapState = state => ({
  auth: state.auth
});

export default withRouter(
  connect(
    mapState,
    actions
  )(Navbar)
);
