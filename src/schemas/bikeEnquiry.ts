import type { Bike } from './bike';

export interface BikeEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  bikeDetails: Bike | null;
}
