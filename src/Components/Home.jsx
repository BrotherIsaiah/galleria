import data from '../data.json';
import React, {useState, useEffect} from 'react';
import whateva from '../assets/arnolfini-portrait/hero-large.jpg'

export default function Gallery(){
    const [galleryData, setGalleryData] = useState([]);
useEffect(() => {
    setGalleryData(data);
    data.forEach((item) => {
        console.log(`Source: ${item.source}, Name: ${item.name}, Year: ${item.year}`);
    })
})
    return(
        <main>
            {galleryData.map((item) => (
                <picture key={item.name}>
                    <img src={item.images.thumbnail} alt={item.name} />
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                </picture>
            ))}
        </main>
    )
}