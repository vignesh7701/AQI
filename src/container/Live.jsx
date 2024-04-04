import "./styles.css";
import "leaflet/dist/leaflet.css";
// import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
// import "./map.css";


import React, { useState, useRef } from "react";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
// import L from "leaflet";


const Live = () => {




  const zoom = 10;
  const mapRef = useRef();
  return (
    <div>
      <MapContainer
        style={{ width: "100%", height: "92.5vh" }}
        center={[13.082, 80.27]}
        zoom={zoom}
        ref={mapRef}
        minZoom={7}
        maxZoom={13}
      >
        <TileLayer url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=PMFhUkfGpOK4cD0UwDGt" />
        <Marker position={[13.082, 80.27]} color="#94C0E0">
          {" "}
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Live;
