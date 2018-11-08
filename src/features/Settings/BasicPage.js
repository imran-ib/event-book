import React, { Component } from "react";
import { Segment, Form, Header, Divider, Button } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import DateInput from "../../common/form/DateInput";
import PlaceInput from "../../common/form/googlePlacesInput";
import TextInput from "../../common/form/TextInputField";
import RedioInput from "../../common/form/redioInput";

class Basics extends Component {
  render() {
    const { pristine, submitting, handleSubmit, updateProfile } = this.props;

    return (
      <Segment>
        <Header dividing size="large" content="Basics" />
        <Form onSubmit={handleSubmit(updateProfile)}>
          <Field
            width={8}
            name="displayName"
            type="text"
            component={TextInput}
            placeholder="Known As"
          />
          <Form.Group inline>
            <label> Gender : </label>
            <Field
              name="gender"
              label="Male"
              type="radio"
              value="male"
              component={RedioInput}
            />
            <Field
              name="gender"
              label="Female"
              type="radio"
              value="female"
              component={RedioInput}
            />
          </Form.Group>
          <Field
            width={8}
            name="dateOfBirth"
            component={DateInput}
            placeholder="Date of Birth"
            dateFormat="YYYY-MM-DD"
            showMonthDropdown={true}
            showYearDropdown={true}
            dropdownMode="select"
            maxDate={moment().subtract(18, "years")}
          />
          <Field
            name="city"
            placeholder="Home Town"
            options={{ types: ["(cities)"] }}
            label="Female"
            component={PlaceInput}
            width={8}
          />
          <Divider />
          <Button
            disabled={pristine || submitting}
            size="large"
            positive
            content="Update Profile"
          />
        </Form>
      </Segment>
    );
  }
}

export default reduxForm({
  form: "userProfile",
  enableReinitialize: true,
  destroyOnUnmount: false
})(Basics);
