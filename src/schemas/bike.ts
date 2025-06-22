import type { CarouselItem } from './carousel';

export type Bike = {
  id: number;
  key: string;
  name: string;
  sub_name?: string;
  starting_price: number;
  image: string;
  carousel_images: CarouselItem[];
  specifications: {
    fuel_capacity: number;
    displacement: number;
    max_power: string;
    max_torque: string;
    mileage: number;
    transmission: string;
    braking_system: string;
    front_brake_type: string;
    rear_brake_type: string;
    kerb_weight: number;
    seat_height: number;
    ground_clearance: number;
  };
};

export enum BrakingSystem {
  SingleChannelABS = 'Single Channel ABS',
  DualChannelABS = 'Dual Channel ABS',
}

export enum TransmissionType {
  Speed5Manual = '5 Speed Manual',
  Speed6Manual = '6 Speed Manual',
}

export enum BrakeType {
  Disc = 'Disc',
  Drum = 'Drum',
}
