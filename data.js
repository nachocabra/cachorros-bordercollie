// ─────────────────────────────────────────────────────────────────
// DATOS DE LOS CACHORROS — editá este archivo para actualizar el sitio
// Después de cada cambio hacé: git add . && git commit -m "update" && git push
// ─────────────────────────────────────────────────────────────────

const WP_NUMBER = '543489312273';

const MADRE = {
  name: 'Kimberly',
  desc: 'Border Collie pura raza, Kimberly es todo lo que podés esperar de la mejor madre: tranquila, equilibrada y con un cariño infinito. Criada con amor, transmite su dulzura y buen carácter a cada uno de sus cachorros.',
  // Agregá las fotos en la carpeta fotos/madre/ y ponelas acá
  photos: [
    // 'fotos/madre/foto1.jpg',
    // 'fotos/madre/foto2.jpg',
  ]
};

const PADRE = {
  name: '',
  desc: 'Border Collie pura raza.',
  // Agregá la foto en fotos/padre/ y ponela acá
  photo: null,
  // photo: 'fotos/padre/foto1.jpg',
};

const CACHORROS = [
  
   {
     id: '1',
     name: 'Tony',           // Nombre (dejá vacío si todavía no tiene)
     sex: 'male',        // 'male' o 'female'
     desc: 'El mas grande de la manada.',           // Descripción del cachorro
     status: 'available', // 'available' o 'reserved'
     birth: '2025-03-15', // Fecha de nacimiento YYYY-MM-DD
     photos: [
       { src: 'fotos/cachorros/cachorro1_dia1.jpg', label: 'Día 1' },
       { src: 'fotos/cachorros/cachorro1_dia5.jpg', label: 'Día 5' },
     ]
   },
];
