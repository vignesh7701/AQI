import React, { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../config/firebase.config";
const Feeds = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const airQualityRef = ref(db, "/AirQuality");

    const unsubscribe = onValue(airQualityRef, (snapshot) => {
      try {
        const airQualityData = snapshot.val();
        setData(airQualityData);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error appropriately (e.g., display an error message)
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <div>
      <h2>Air Quality</h2>
      <p>AQI: {data.AQI || "Loading..."}</p>
      <p>PM10: {data.PM10 || "Loading..."}</p>
    </div>
  );
};

export default Feeds;
