import type { Bike } from '../schemas/bike';
import PulsarN150 from '/bikes/pulsar/pulsar-sv-brake.png';
import Dominar400 from '/bikes/dominar/dominar-sv-brake.png';
import Avenger220 from '/bikes/avenger/avenger-sv-brake.png';
import Platina110ABS from '/bikes/platina/platina-sv-brake.png';
import CT125X from '/bikes/ct-125/ct-sv-brake.png';

export const bikeData: Bike[] = [
  {
    id: 1,
    name: 'Pulsar N150',
    starting_price: 117677,
    fuel_capacity: 14,
    displacement: 149.68,
    image: PulsarN150,
  },
  {
    id: 2,
    name: 'Dominar 400',
    starting_price: 229781,
    fuel_capacity: 13,
    displacement: 373.3,
    image: Dominar400,
  },
  {
    id: 3,
    name: 'Avenger 220 Street',
    starting_price: 143373,
    fuel_capacity: 13,
    displacement: 220,
    image: Avenger220,
  },
  {
    id: 4,
    name: 'Platina 110 ABS',
    starting_price: 79821,
    fuel_capacity: 10.5,
    displacement: 115.45,
    image: Platina110ABS,
  },
  {
    id: 5,
    name: 'CT 125X',
    starting_price: 117677,
    fuel_capacity: 14,
    displacement: 149.68,
    image: CT125X,
  },
];
