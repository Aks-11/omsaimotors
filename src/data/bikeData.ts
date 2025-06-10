import type { Bike } from '../schemas/bike';

export const bikeData: Bike[] = [
  {
    id: 1,
    key: 'pulsar-n150',
    name: 'Pulsar N150',
    starting_price: 117677,
    fuel_capacity: 14,
    displacement: 149.68,
    image: '/bikes/pulsar-n150/pulsar-sv-brake.png',
    sub_name: 'Single Channel ABS',
    carousel_images: [
      {
        type: 'image',
        source: '/bikes/pulsar-n150/pulsar-sv-brake.png',
      },
      {
        type: 'image',
        source: '/bikes/pulsar-n150/pulsar-fv.png',
      },
      {
        type: 'image',
        source: '/bikes/pulsar-n150/pulsar-sv-gear.png',
      },
      {
        type: 'image',
        source: '/bikes/pulsar-n150/pulsar-bv.png',
      },
    ],
  },
  {
    id: 2,
    key: 'pulsar-250',
    name: 'Pulsar 250',
    starting_price: 146641,
    fuel_capacity: 14,
    displacement: 249,
    image: '/bikes/pulsar-250/pulsar-250-black-sv-brake.png',
    sub_name: 'Dual Channel ABS',
    carousel_images: [
      {
        type: 'image',
        source: '/bikes/pulsar-250/pulsar-250-black-sv-brake.png',
      },
    ],
  },
  {
    id: 3,
    key: 'dominar-400',
    name: 'Dominar 400',
    starting_price: 229781,
    fuel_capacity: 13,
    displacement: 373.3,
    image: '/bikes/dominar-400/dominar-sv-brake.png',
    carousel_images: [
      {
        type: 'image',
        source: '/bikes/dominar-400/dominar-sv-brake.png',
      },
      {
        type: 'image',
        source: '/bikes/dominar-400/dominar-fv.png',
      },
      {
        type: 'image',
        source: '/bikes/dominar-400/dominar-sv-gear.png',
      },
      {
        type: 'image',
        source: '/bikes/dominar-400/dominar-bv.png',
      },
    ],
  },
  {
    id: 4,
    key: 'avenger-220',
    name: 'Avenger 220 Street',
    starting_price: 143373,
    fuel_capacity: 13,
    displacement: 220,
    image: '/bikes/avenger/avenger-sv-brake.png',
    carousel_images: [
      {
        type: 'image',
        source: '/bikes/avenger/avenger-sv-brake.png',
      },
      {
        type: 'image',
        source: '/bikes/avenger/avenger-fv.png',
      },
      {
        type: 'image',
        source: '/bikes/avenger/avenger-sv-gear.png',
      },
      {
        type: 'image',
        source: '/bikes/avenger/avenger-bv.png',
      },
    ],
  },
  {
    id: 5,
    key: 'platina-110',
    name: 'Platina 110 ABS',
    starting_price: 79821,
    fuel_capacity: 10.5,
    displacement: 115.45,
    image: '/bikes/platina/platina-sv-brake.png',
    carousel_images: [
      {
        type: 'image',
        source: '/bikes/platina/platina-sv-brake.png',
      },
      {
        type: 'image',
        source: '/bikes/platina/platina-fv.png',
      },
      {
        type: 'image',
        source: '/bikes/platina/platina-sv-gear.png',
      },
      {
        type: 'image',
        source: '/bikes/platina/platina-bv.png',
      },
    ],
  },
  {
    id: 6,
    key: 'ct-125x',
    name: 'CT 125X',
    starting_price: 117677,
    fuel_capacity: 14,
    displacement: 149.68,
    image: '/bikes/ct-125/ct-sv-brake.png',
    carousel_images: [
      {
        type: 'image',
        source: '/bikes/ct-125/ct-sv-brake.png',
      },
    ],
  },
];

export const parentBikeModelData: string[] = ['Pulsar', 'Dominar', 'Avenger', 'Platina', 'CT'];
