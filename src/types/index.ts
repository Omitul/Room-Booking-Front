export type TRoom = {
  _id: string;
  image: string;
  name: string;
  roomNo: number;
  floorNo: number;
  capacity: number;
  pricePerSlot: number;
  amenities: string[];
  isDeleted: boolean;
};
