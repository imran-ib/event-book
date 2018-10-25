import React from "react";
import { Form, Segment, Button } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import TextInputField from "../../../common/form/TextInputField";

const RegisterForm = () => {
  return (
    <div>
      <Form size="large">
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
          <Button fluid size="large" color="teal">
            Register
          </Button>
        </Segment>
      </Form>
    </div>
  );
};

export default reduxForm({ form: "RegisterForm" })(RegisterForm);
