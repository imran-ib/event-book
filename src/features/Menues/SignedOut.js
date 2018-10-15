import React from "react";
import { Button, Menu } from "semantic-ui-react";

const SigedOut = ({ SignedIn }) => {
  return (
    <Menu.Item position="right">
      <Button onClick={SignedIn} basic inverted content="Login" />
      <Button
        basic
        inverted
        content="Register"
        style={{ marginLeft: "0.5em" }}
      />
    </Menu.Item>
  );
};

export default SigedOut;
