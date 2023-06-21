import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  const strings = [
    "DevOps Engineer",
    "Infrastructure as Code Specialist",
    "Continuous Integration/Deployment",
    "Automation Enthusiast",
  ];

  return (
    <Typewriter
      options={{
        strings: strings,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
