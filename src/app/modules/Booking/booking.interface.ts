import { ObjectId } from "mongoose";

export type TBooking = {
  userId: ObjectId;
  bikeId: string;
  startTime: Date;
  returnTime: Date;
  totalCost: number;
  isReturned: boolean;
};
