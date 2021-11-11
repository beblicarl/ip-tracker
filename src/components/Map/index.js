import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "#800000",
      opacity: "0.4",
      padding: "25px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      fontFamily: "cursive",
      fontSize: "1.3rem",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)",
    }}>
    {text}
  </div>
);

const Map = ({ tracker }) => {
  const defaultProps = {
    center: {
      lat: tracker?.location.lat,
      lng: tracker?.location.lng,
    },
    zoom: 16,
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GMAP }}
        center={defaultProps.center}
        defaultZoom={defaultProps.zoom}>
        <AnyReactComponent
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
          text={tracker?.location.city || "marker"}
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
