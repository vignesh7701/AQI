import React, { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../config/firebase.config";
import PM1 from "../assets/AQI/1.png";
import PM2 from "../assets/AQI/2.png";
import PM10 from "../assets/AQI/3.png";
import NO from "../assets/AQI/4.png";
import CO from "../assets/AQI/5.png";
import O from "../assets/AQI/6.png";
import VOC from "../assets/AQI/7.png";

const coordinates = [
  { lat: 12.785085, lng: 80.219701, name: "Kelambakkam" },
  { lat: 12.92, lng: 80.11, name: "Tambaram" },
  { lat: 12.93, lng: 80.23, name: "Thoraipakkam" },
  { lat: 13.116596, lng: 80.104916, name: "Adyar" },
  { lat: 12.98, lng: 80.26, name: "Thiruvanmyur" },
  { lat: 12.724142, lng: 80.192217, name: "Thiruporur" },
  { lat: 12.834247, lng: 80.202841, name: "Siruseri" },
  { lat: 12.869918, lng: 80.21639, name: "St Josephs" },
];

const Feeds = () => {
  
  const defaultLocation = "St Josephs";
  const [selectedLocation, setSelectedLocation] = useState(defaultLocation);

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  useEffect(() => {
    const dbRef = ref(db, "sensorData");
    const getRealtimeData = () => {
      onValue(
        dbRef,
        (snapshot) => {
          try {
            if (snapshot && snapshot.exists()) {
              const data = snapshot.val();
              const sensorDataArray = Object.values(data);
              setSensorData(sensorDataArray);
            } else {
              setSensorData([]);
            }
          } catch (error) {
            console.error("Error fetching sensor data:", error);
          }
        },
        (error) => {
          console.error("Error with Firebase onValue:", error);
        }
      );
    };

    getRealtimeData();

    return () => {
      onValue(dbRef, null);
    };
  }, []);

  const PMdata = [
    {
      src: PM1,
      value: 23,
    },
    {
      src: PM2,
      value: 30,
    },
    {
      src: PM10,
      value: 40,
    },
  ];

  const Elementdata = [
    {
      src: NO,
      value: 43,
    },
    {
      src: CO,
      value: 23,
    },
    {
      src: O,
      value: 30,
    },
    {
      src: VOC,
      value: 40,
    },
  ];

  return (
    <div className="h-100lvh bg-[#94C0E0] p-4">
      <div className="container mx-auto px-6 bg-sky-50 rounded-xl">
        <div className="text-blue-900 pt-4 md:pt-5 flex justify-center font-bold text-lg sm:text-2xl md:text-3xl ml-2">
          Data Feeds
        </div>
        <div className="mt-4">
          <label
            htmlFor="location"
            className="block text-sm font-medium px-4 text-gray-700"
          >
            Location
          </label>
          <select
            id="location"
            name="location"
            className="mt-1  block w-48 py-3 px-5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            defaultValue={defaultLocation}
            onChange={handleLocationChange}
          >
            {coordinates.map((coordinate, index) => (
              <option key={index} value={coordinate.name}>
                {coordinate.name}
              </option>
            ))}
          </select>
        </div>
        <div className="pl-3 py-10 font-medium text-2xl mb-7 text-blue-900 text-center">
          <p>
            <span className="blink">🔴</span>
            {selectedLocation}
          </p>
        </div>
        <div className="text-[1.2rem] md:text-[1.6rem] px-4 text-blue-800 font-medium  ">
          Pollution Measurements
        </div>
        <div className="grid grid-row-4 xl:grid-cols-4 mb-10 p-7 ">
          {PMdata.map((item, index) => (
            <div
              key={index}
              className=" flex flex-col md:flex-row border-2  border-blue-950 rounded-lg w-5/6 h-[90%]"
            >
              <img className="w-60 p-7 m-auto" src={item.src} alt="" />
              <div className="text-[0.9rem]   lg:text-[1.1rem] justify-self-center text-white m-auto border border-black-2 rounded-lg bg-blue-900 font-bold p-3  text-center">
                {item.value}
              </div>
            </div>
          ))}
        </div>

        <div className="text-[1.2rem] md:text-[1.6rem] px-4 text-blue-800 font-medium">
          Element Analysis
        </div>
        <div className="grid grid-row-4 xl:grid-cols-4 p-4">
          {Elementdata.map((item, index) => (
            <div
              key={index}
              className=" flex flex-col md:flex-row border-2  border-blue-950 rounded-lg w-5/6 h-[90%] "
            >
              <img className="w-48 p-4 m-auto" src={item.src} alt="" />
              <div className="text-[0.9rem]  lg:text-[1.1rem] text-white m-auto border border-black-2 rounded-lg bg-blue-900 font-bold p-3  text-center">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feeds;
