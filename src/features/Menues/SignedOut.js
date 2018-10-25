import React from "react";
import { Button, Menu } from "semantic-ui-react";

const SigedOut = ({ SignedIn, handleRegister }) => {
  return (
    <Menu.Item position="right">
      <Button onClick={SignedIn} basic inverted content="Login" />
      <Button
        onClick={handleRegister}
        basic
        inverted
        content="Register"
        style={{ marginLeft: "0.5em" }}
      />
    </Menu.Item>
  );
};

export default SigedOut;
