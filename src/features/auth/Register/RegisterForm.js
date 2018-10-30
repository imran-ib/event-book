import React from "react";
import { connect } from "react-redux";
import { combineValidators, isRequired } from "revalidate";
import { Form, Segment, Button, Label, Divider } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import TextInputField from "../../../common/form/TextInputField";
import { registerUser, socialLogin } from "../AuthActions";
import SocialLogin from "../socialLogin/socialLogin";

const actions = {
  registerUser,
  socialLogin
};

const validate = combineValidators({
  displayName: isRequired({ message: "Provide DisplayName" }),
  email: isRequired({ message: "Email is Required" }),
  password: isRequired({ message: "Password" })
});

const RegisterForm = ({
  handleSubmit,
  registerUser,
  pristine,
  submitting,
  error,
  socialLogin
}) => {
  return (
    <div>
      <Form size="large" onSubmit={handleSubmit(registerUser)}>
        <Segment>
          <Field
            name="displayName"
            type="text"
            component={TextInputField}
            placeholder="Known As"
          />
          <Field
            name="email"
            type="text"
            component={TextInputField}
            placeholder="Email"
          />
          <Field
            name="password"
            type="password"
            component={TextInputField}
            placeholder="Password"
          />
          {error && (
            <Label basic color="red">
              {error}
            </Label>
          )}
          <Button
            disabled={pristine || submitting}
            fluid
            size="large"
            color="teal"
          >
            Register
          </Button>
          <Divider horizontal>OR</Divider>
          <SocialLogin socialLogin={socialLogin} />
        </Segment>
      </Form>
    </div>
  );
};

export default connect(
  null,
  actions
)(reduxForm({ form: "RegisterForm", validate })(RegisterForm));
