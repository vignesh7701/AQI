import "./styles.css";
import "leaflet/dist/leaflet.css";
// import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import { db } from "../config/firebase.config";
// import "./map.css";

import React, { useState, useRef } from "react";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
// import L from "leaflet";

const Live = () => {
  const coordinates = [
    { lat: 12.785085, lng: 80.219701 }, //Kelambakkam
    { lat: 12.92, lng: 80.11 },//Tambaram
    { lat: 12.93, lng: 80.23 }, // Thoraipakkam
    { lat: 13.116596, lng: 80.104916 }, // Adyar
    { lat: 12.98, lng: 80.26 }, // Thiruvanmyur
    { lat: 12.724142, lng: 80.192217 }, // Thiruporur
    { lat: 12.834247, lng: 80.202841 }, //Siruseri
    { lat: 12.869918, lng: 80.21639 }, //St Josephs
    // Add more coordiates as needed
  ];

  const zoom = 10;
  const mapRef = useRef();
  return (
    <div>
      <MapContainer
        style={{ width: "100%", height: "92.5vh" }}
        center={[13.082, 80.27]}
        zoom={zoom}
        ref={mapRef}
        minZoom={10}
        maxZoom={13}
      >
        <TileLayer url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=PMFhUkfGpOK4cD0UwDGt" />
        {coordinates.map((coord, index) => (
          <Marker
            key={index}
            position={[coord.lat, coord.lng]}
            iconSize={[20, 20]}
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default Live;
