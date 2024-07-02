import data from "../data.json";
import React, { useState, useEffect } from "react";
import "./Home.css";

export default function GalleryDetails() {
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
      <main>
        {galleryData.map((item) => (
          <>
          <div>
          <img src={item.images.thumbnail} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.artist.name}</p>
            <img src={item.artist.image} alt="" />
          </div>
            
            <div>
            <p>{item.description}</p>
            <p>{item.year}</p>
            </div>
          </>
        ))}
      </main>
    </>
  );
}
