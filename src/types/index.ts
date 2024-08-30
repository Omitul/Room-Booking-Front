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

// type Slot = {
//   _id: string;
//   room: string;
//   date: string;
//   startTime: string;
//   endTime: string;
//   isBooked: boolean;
// };

// type Room = {
//   image: string;
//   name: string;
//   roomNo: number;
//   floorNo: number;
//   capacity: number;
//   pricePerSlot: number;
//   aminities: string[];
//   isDeleted: boolean;
// };

type User = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  address: string;
};

export type DataItem = {
  _id: string;
  room: TRoom;
  user: User;
  date: string;
  isConfirmed: string;
};
