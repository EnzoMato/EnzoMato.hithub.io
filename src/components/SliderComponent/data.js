// data.js

// Obtener la ruta base del archivo actual
// const baseURL = import.meta.url.slice(0, import.meta.url.lastIndexOf('/') + 1);

import Cachorro from '../../assets/Cachorro.jpg'
import Gata from '../../assets/Gata.jpg'
import Perros from '../../assets/Perros.jpg'

export const list = [
  {
    id: 1,
    name: 'Cachorro',
    image: Cachorro,
  },
  {
    id: 2,
    name: 'Gata',
    image: Gata,
  },
  {
    id: 3,
    name: 'Perros',
    image: Perros,
  },
];
