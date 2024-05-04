import React, { useState } from 'react';
import { list } from './data.js';
import './GaleriaFotos2.css';

export default function GaleriaFotos() {
  const [images] = useState(list);

  const handleClick = (id) => {
    console.log('Contacting for image:', id);
  };

  return (
    <>
      <h2 className='titulo2-h2'>Protectoras</h2>
      <section className='section2'>
        {images.map((img) => (
          <div className='card2' key={img.id}>
            <img className='card-img2' src={img.image} alt={img.name} />
            <p>{img.name}</p>
            <button className='card-button2' onClick={() => handleClick(img.id)}>
              CONTACTAR
            </button>
          </div>
        ))}
      </section>
    </>
  );
}