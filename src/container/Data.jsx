import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Good from "../assets/Good.png";
import Moderate from "../assets/Moderate.png";
import Poor from "../assets/Poor.png";
import Unhealthy from "../assets/Unhealthy.png";
import Severe from "../assets/Severe.png";
import Hazardous from "../assets/Hazardous.png";

const Data = () => {

  
const data = [
  {
    image: Good,
    heading: "Good Level",
    paragraph:
      "The air is fresh and free from toxins. People are not exposed to any health risk.",
  },
  {
    image: Moderate,
    heading: "Moderate Level",
    paragraph:
      "Acceptable air quality for healthy adults but mild threat to sensitive individuals.",
  },
  {
    image: Poor,
    heading: "Poor Level",
    paragraph:
      "Inhaling such air can cause slight discomfort and difficulty in breathing.",
  },
  {
    image: Unhealthy,
    heading: "Unhealthy Level",
    paragraph:
      "This could be typically problematic for children, pregnant women and the elderly.",
  },
  {
    image: Severe,
    heading: "Severe Level",
    paragraph:
      "Exposure to air can cause chronic morbidities or even organ impairment.",
  },
  {
    image: Hazardous,
    heading: "Hazardous Level",
    paragraph:
      "Beware! Your life is in danger. Prolonged exposure can lead to premature death.",
  },
];


  return (
    <div className="h-full bg-[#94C0E0] p-4">
      <div className="container mx-auto px-6 bg-sky-50 rounded-xl">
        <div className="text-blue-900 pt-4 md:pt-5 flex justify-center font-bold text-lg sm:text-2xl md:text-3xl ml-2">
          Air Quality Details
        </div>
        <div className="flex flex-col lg:flex-row justify-around">
          <div className="flex justify-center items-center">
            <CircularProgressbar
              value={70}
              maxValue={300}
              text={`${70}`}
              strokeWidth={10}
              styles={{
                path: {
                  stroke: "#a8990c",
                },
                text: {
                  fill: "#a8990c",
                  fontSize: "20px",
                  fontWeight: "bold",
                },
              }}
              className="w-48 h-48 p-2 justify-center items-center  mt-4"
            />
          </div>
          <div className="mx-auto lg:mx-0 mt-8 border-4 p-4 rounded-xl border-blue-900 max-w-2xl ">
            <h2 className="text-xl lg:text-2xl font-medium text-sky-700 text-center">
              Chennai's Air Quality
            </h2>
            <p className="sm:text-lg md:text-xl mt-2 py-5 mb-7  md:px-7">
              70 seems to be okay for air quality. It indicates a moderate level
              of pollution. However, it is always recommended to take necessary
              precautions and stay updated with the latest air quality
              information with time to time updation of quality.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap mt-5">
          {data.map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-2">
              <div className="rounded border border-green-900">
                <div className="flex flex-col justify-center items-center gap-3 mt-2">
                  <img src={item.image} alt="" className="w-1/3 md:w-3/12" />
                  <h1 className="sm:text-xl font-medium">{item.heading}</h1>
                </div>
                <div>
                  <p className="sm:text-lg p-4 md:text-xl font-normal md:p-10">
                    {item.paragraph}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Data;
