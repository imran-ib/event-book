import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon, Segment } from "semantic-ui-react";

const Marker = () => <Icon name="marker" color="red" size="big" />;

const EventMap = ({ lat, lng }) => {
  const center = [lat, lng];
  const zoom = 14;
  return (
    <Segment attached="bottom">
      <div style={{ height: "300px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyAU4OfA4t7er9vQfE5Z50_MLFwOOiqxrnw"
          }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker lat={lat} lng={lng} />
        </GoogleMapReact>
      </div>
    </Segment>
  );
};

export default EventMap;
