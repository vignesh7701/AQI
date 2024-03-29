import React from "react";

const CircularStructure = ({ value }) => {
  const radius = 50; // Radius of the circle
  const strokeWidth = 2; // Stroke width of the circle
  const diameter = radius * 2; // Diameter of the circle
  const centerX = radius + strokeWidth / 2; // X coordinate of the center
  const centerY = radius + strokeWidth / 2; // Y coordinate of the center

  return (
    <svg
      width={diameter}
      height={diameter}
      viewBox={`0 0 ${diameter} ${diameter}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx={centerX}
        cy={centerY}
        r={radius}
        fill="transparent"
        stroke="black"
        strokeWidth={strokeWidth}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="20"
      >
        {value}
      </text>
    </svg>
  );
};

export default CircularStructure;
