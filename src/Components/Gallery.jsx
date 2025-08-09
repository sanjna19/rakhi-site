// src/components/Gallery.jsx
import React from "react";
import "../index.css";

const images = [
  "rakhi1.jpeg",
  "rakhi2.jpeg",
  "rakhi3.jpeg",
  "rakhi4.jpeg",
  "rakhi5.jpeg",
  "rakhi6.jpeg",
  "rakhi7.jpeg",
  "rakhi8.jpeg",
  "rakhi9.jpeg",
  "rakhi10.jpeg",
  "rakhi11.jpeg",
  "rakhi12.jpeg",
  "rakhi13.jpeg",
  "rakhi14.jpeg",
  "rakhi15.jpeg",
];

const Gallery = () => {
  return (
    <section className="gallery-section">
      <h2>✨ Over the years</h2>

      {/* change className from mosaic-grid → masonry */}
      <div className="masonry">
        {images.map((src, i) => (
          <figure key={i}>
            <img src={src} alt={`rakhi-${i}`} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
