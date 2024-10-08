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
  room?: string;
};

export type TypeSlot = {
  _id?: string;
  room?: TypeRoom; // Ensure this is TypeRoom
  date: string;
  userName: string;
  isConfirmed: string;
  roomName: string;
  startTime: string;
  endTime: string;
  isbooked?: boolean;
};

export type TypeRoom = {
  _id?: string;
  name: string;
  image: string[];
  roomNo: number;
  floorNo: number;
  capacity: number;
  pricePerSlot: number;
  amenities: string[];
  isDeleted?: boolean;
};

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
  startTime: string;
  EndTime: string;
  isConfirmed: string;
};
