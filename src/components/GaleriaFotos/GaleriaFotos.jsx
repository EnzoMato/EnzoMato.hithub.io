import React, { useState } from 'react';
import { list } from './data.js';
import './GaleriaFotos.css';

export default function GaleriaFotos() {
  const [images] = useState(list);

  const handleClick = (id) => {
    console.log('Contacting for image:', id);
  };

  return (
    <>
      <h2 className='titulo-h2'>Protectoras</h2>
      <section className='section'>
        {images.map((img) => (
          <div className='card' key={img.id}>
            <img className='card-img' src={img.image} alt={img.name} />
            <p>{img.name}</p>
            <button className='card-button' onClick={() => handleClick(img.id)}>
              CONTACTAR
            </button>
          </div>
        ))}
      </section>
    </>
  );
}