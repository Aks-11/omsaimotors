import type { CarouselItem } from '../schemas/carousel';
import { Home1, Home2, Home3, Home4 } from '../assets/homePage';

export const homePageCarouselData: CarouselItem[] = [
  { type: 'video', source: Home1 },
  { type: 'video', source: Home2 },
  { type: 'image', source: Home3 },
  { type: 'image', source: Home4 },
];
