import React from "react";
import { connect } from "react-redux";
import {
  Segment,
  Header,
  Form,
  Divider,
  Label,
  Button,
  Icon
} from "semantic-ui-react";
import {
  combineValidators,
  isRequired,
  matchesField,
  composeValidators
} from "revalidate";
import { Field, reduxForm } from "redux-form";
import TextInputField from "../../common/form/TextInputField";
import { updatePassword } from "../auth/AuthActions";

const validate = combineValidators({
  newPassword1: isRequired({ message: "Please Enter New Password" }),
  newPassword2: composeValidators(
    isRequired({ message: "Please confirm password" }),
    matchesField("newPassword1")({ message: "Password do not match" })
  )()
});

const actions = { updatePassword };

const Account = ({
  error,
  invalid,
  submitting,
  handleSubmit,
  updatePassword,
  providerId
}) => {
  console.log(providerId);
  return (
    <Segment>
      <Header dividing size="large" content="Account" />
      {providerId &&
        providerId === "password" && (
          <div>
            <Header color="teal" sub content="Change password" />
            <p>Use this form to update your account settings</p>

            <Form onSubmit={handleSubmit(updatePassword)}>
              <div>
                <Field
                  width={8}
                  name="newPassword1"
                  type="password"
                  pointing="left"
                  inline={true}
                  component={TextInputField}
                  basic={true}
                  placeholder="New Password"
                />

                <Field
                  width={8}
                  name="newPassword2"
                  type="password"
                  inline={true}
                  basic={true}
                  pointing="left"
                  component={TextInputField}
                  placeholder="Confirm Password"
                />
              </div>

              {error && (
                <Label basic color="red">
                  {error}
                </Label>
              )}

              <Divider />
              <Button
                disabled={invalid || submitting}
                size="large"
                positive
                content="Update Password"
              />
            </Form>
          </div>
        )}

      {providerId &&
        providerId === "google.com" && (
          <div>
            <Header color="teal" sub content="Google Account" />
            <p>Please visit Google to update your account settings</p>
            <Button type="button" color="google plus">
              <Icon name="google plus" />
              Go to Google
            </Button>
          </div>
        )}
    </Segment>
  );
};

const mapState = state => ({
  providerId: state.firebase.auth.providerData[0].providerId
});

export default connect(
  mapState,
  actions
)(reduxForm({ form: "account", validate })(Account));
