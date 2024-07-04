import { Schema, model } from 'mongoose';
import { TBooking } from './booking.interface';

const bookingSchema = new Schema<TBooking>({
  userId: {type: String, required: true},
  bikeId: {type: String, required: true},
  startTime: {type: Date, required: true},
  returnTime: {type: Date, default: null},
  totalCost: {type: Number, default: null},
  isReturned: {type: Boolean, default: false}
});

export const Booking = model<TBooking>('booking', bookingSchema);