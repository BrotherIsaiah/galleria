import data from "../data.json";
import React, { useState, useEffect } from "react";
import "./Home.css";
import TheHeader from "./Header";

export default function Gallery() {
  const [galleryData, setGalleryData] = useState([]);
  useEffect(() => {
    setGalleryData(data);
    data.forEach((item) => {
      console.log(
        `Source: ${item.source}, Name: ${item.name}, Year: ${item.year}`
      );
    });
  });
  return (
    <>
      <TheHeader />
      <main>
        {galleryData.map((item) => (
          <figure key={item.name}>
            <img src={item.images.thumbnail} alt={item.name} />
            <figcaption className="test-position">
              <h2>{item.name}</h2>
              <p>{item.artist.name}</p>
            </figcaption>
          </figure>
        ))}
      </main>
    </>
  );
}
