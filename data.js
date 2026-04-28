// ─────────────────────────────────────────────────────────────────
// DATOS DE LOS CACHORROS — editá este archivo para actualizar el sitio
// Después de cada cambio hacé: git add . && git commit -m "update" && git push
// ─────────────────────────────────────────────────────────────────

const WP_NUMBER = '543489312273';

const MADRE = {
  name: 'Kimberly',
  desc: 'Border Collie pura raza, Kimberly es todo lo que podés esperar de la mejor madre: tranquila, equilibrada y con un cariño infinito. Criada con amor, transmite su dulzura y buen carácter a cada uno de sus cachorros.',
  photos: [
    'fotos/madre/madre1.jpeg',
    'fotos/madre/madre2.jpeg',
  ]
};

const CACHORROS = [
  {
    id: '1',
    name: 'Tony',
    sex: 'male',
    desc: 'El más grande de la manada. Imponente y carismático.',
    status: 'reserved',
    birth: '2025-03-15',
    photos: [
      { src: 'fotos/cachorros/tony1.jpeg', label: 'Foto 1' },
      { src: 'fotos/cachorros/tony2.jpeg', label: 'Foto 2' },
    ]
  },
  {
    id: '2',
    name: 'Tommy',
    sex: 'male',
    desc: 'Juguetón y lleno de energía, siempre el primero en explorar.',
    status: 'available',
    birth: '2025-03-15',
    photos: [
      { src: 'fotos/cachorros/tommy1.jpeg', label: 'Foto 1' },
      { src: 'fotos/cachorros/tommy2.jpeg', label: 'Foto 2' },
    ]
  },
  {
    id: '3',
    name: 'Panchito',
    sex: 'male',
    desc: 'Tranquilo y cariñoso, se lleva bien con todos.',
    status: 'available',
    birth: '2025-03-15',
    photos: [
      { src: 'fotos/cachorros/panchito.jpeg', label: 'Foto 1' },
    ]
  },
  {
    id: '4',
    name: 'Chapi',
    sex: 'female',
    desc: 'Curiosa e inteligente, aprende rapidísimo.',
    status: 'available',
    birth: '2025-03-15',
    photos: [
      { src: 'fotos/cachorros/chapi.jpeg', label: 'Foto 1' },
    ]
  },
  {
    id: '5',
    name: 'Cachivache',
    sex: 'female',
    desc: 'La traviesa de la camada, nunca para quieto.',
    status: 'available',
    birth: '2025-03-15',
    photos: [
      { src: 'fotos/cachorros/cachivache1.jpeg', label: 'Foto 1' },
      { src: 'fotos/cachorros/cachivache2.jpeg', label: 'Foto 2' },
    ]
  },
  {
    id: '6',
    name: 'Sirenita',
    sex: 'female',
    desc: 'Dulce y curiosa, con una mirada que te roba el corazón.',
    status: 'available',
    birth: '2025-03-15',
    photos: [
      { src: 'fotos/cachorros/sirenita1.jpeg', label: 'Foto 1' },
      { src: 'fotos/cachorros/sirenita2.jpeg', label: 'Foto 2' },
      { src: 'fotos/cachorros/sirenita3.jpeg', label: 'Foto 3' },
    ]
  },
  {
    id: '7',
    name: 'Kyra',
    sex: 'female',
    desc: 'Elegante y serena, la más femenina de la camada.',
    status: 'available',
    birth: '2025-03-15',
    photos: [
      { src: 'fotos/cachorros/kyra.jpeg', label: 'Foto 1' },
    ]
  },
  {
    id: '8',
    name: 'Marta',
    sex: 'female',
    desc: 'Afectuosa y sociable, le encanta el contacto humano.',
    status: 'reserved',
    birth: '2025-03-15',
    photos: [
      { src: 'fotos/cachorros/marta.jpeg', label: 'Foto 1' },
    ]
  },
  {
    id: '9',
    name: 'Roma',
    sex: 'female',
    desc: 'Vivaz y expresiva, siempre lista para jugar.',
    status: 'reserved',
    birth: '2025-03-15',
    photos: [
      { src: 'fotos/cachorros/roma.jpeg', label: 'Foto 1' },
    ]
  },
  {
    id: '10',
    name: 'Solcito',
    sex: 'female',
    desc: 'Alegre y cálida, ilumina cualquier espacio con su presencia.',
    status: 'available',
    birth: '2025-03-15',
    photos: [
      { src: 'fotos/cachorros/solcito.jpeg', label: 'Foto 1' },
    ]
  },
];
