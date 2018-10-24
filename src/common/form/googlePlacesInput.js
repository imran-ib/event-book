import React, { Component } from "react";
import { Form, Label } from "semantic-ui-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import Script from "react-load-script";

export class PlacesInput extends Component {
  state = {
    scriptLoader: false,
    address: ""
  };
  handleSctipt = () => {
    this.setState({
      scriptLoader: true
    });
  };
  onChange = address => {
    this.setState({ address: address });
  };
  handleFormSubmit = event => {
    event.preventDefault();

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log("Success", latLng))
      .catch(error => console.error("Error", error));
  };

  render() {
    const {
      input,
      width,
      options,
      onSelect,
      placeholder,
      meta: { touched, error }
    } = this.props;

    return (
      <Form.Field error={touched && !!error} width={width}>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyAU4OfA4t7er9vQfE5Z50_MLFwOOiqxrnw&libraries=places"
          onLoad={this.handleSctipt}
        />
        {this.state.scriptLoader && (
          <PlacesAutocomplete
            inputProps={{ ...input, placeholder }}
            options={options}
            onSelect={onSelect}
            styles={style}
          />
        )}

        {touched &&
          error && (
            <Label basic color="red">
              {error}
            </Label>
          )}
      </Form.Field>
    );
  }
}

const style = {
  autocompleteContainer: {
    zIndex: "10000"
  }
};

export default PlacesInput;
