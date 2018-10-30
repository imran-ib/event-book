import React from "react";
import { Form, Segment, Button, Label, Divider } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import TextInputField from "../../../common/form/TextInputField";
import { connect } from "react-redux";
import { socialLogin } from "../AuthActions";
import SocialLogin from "../socialLogin/socialLogin";

const actions = {
  socialLogin
};

const LoginForm = ({ socialLogin, handleSubmit, error }) => {
  return (
    <Form size="large" onSubmit={handleSubmit(socialLogin)}>
      <Segment>
        <Field
          name="email"
          component={TextInputField}
          type="text"
          placeholder="Email Address"
        />
        <Field
          name="password"
          component={TextInputField}
          type="password"
          placeholder="password"
        />
        {error && (
          <Label basic color="red">
            {error}
          </Label>
        )}
        <Button fluid size="large" color="teal">
          Login
        </Button>
        <Divider horizontal>OR</Divider>
        <SocialLogin socialLogin={socialLogin} />
      </Segment>
    </Form>
  );
};

export default connect(
  null,
  actions
)(reduxForm({ form: "LoginForm" })(LoginForm));
