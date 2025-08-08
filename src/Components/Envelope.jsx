import React, { useState } from "react";
import "../index.css";

const Envelope = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="envelope-container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p className="envelope-hint">Hover over the envelope</p>

      <div className="envelope-wrapper">
        <img src="suprise.jpeg" alt="Surprise Rakhi" className="rakhi-reveal" />
        <img
          src="envelope.jpeg"
          alt="Envelope"
          className={`envelope-img ${hovered ? "open" : ""}`}
        />
      </div>
    </div>
  );
};

export default Envelope;
