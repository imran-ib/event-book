import React from "react";
import { Form, Segment, Button } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import TextInputField from "../../../common/form/TextInputField";
import { connect } from "react-redux";
import { loginUser } from "../AuthActions";

const actions = {
  loginUser
};

const LoginForm = ({ loginUser, handleSubmit }) => {
  return (
    <Form error size="large" onSubmit={handleSubmit(loginUser)}>
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
        <Button fluid size="large" color="teal">
          Login
        </Button>
      </Segment>
    </Form>
  );
};

export default connect(
  null,
  actions
)(reduxForm({ form: "LoginForm" })(LoginForm));
