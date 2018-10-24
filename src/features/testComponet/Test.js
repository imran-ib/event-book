import React, { Component } from "react";
import { connect } from "react-redux";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import Script from "react-load-script";
import GoogleMapReact from "google-map-react";
import { Icon } from "semantic-ui-react";

const Marker = () => <Icon name="marker" color="red" size="big" />;

export class Test extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
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
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    };

    return (
      <div>
        {/* <Script
          url="https://maps.googleapis.com/maps/api/js?key=
          AIzaSyAU4OfA4t7er9vQfE5Z50_MLFwOOiqxrnw&libraries=places"
          onLoad={this.handleSctipt}
        /> */}
        {this.state.scriptLoader && (
          <form onSubmit={this.handleFormSubmit}>
            <PlacesAutocomplete inputProps={inputProps} />
            <button type="submit">Submit</button>
          </form>
        )}

        <div style={{ height: "100vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyAU4OfA4t7er9vQfE5Z50_MLFwOOiqxrnw"
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <Marker lat={59.955413} lng={30.337844} text={"Kreyser Avrora"} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  data: state.test.data
});

export default connect(mapState)(Test);
