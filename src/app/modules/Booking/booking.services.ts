import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TBooking } from './booking.interface';
import { Booking } from './booking.model';
import { Bike } from '../Bike/bike.model';

const createBookingIntoDB = async (booking: Partial<TBooking>) => {
  const result = await Booking.create(booking);
  return result;
};

const getUsersAllBookingsFromDB = async (userId: string) => {
  const result = await Booking.find({userId: userId});
  return result;
};

const updateBookingFromDB = async (bookingId: string) => {
  const bookingData = await Booking.findById(bookingId);
  const bikeData = await Bike.findById(bookingData?.bikeId);
  if (!bookingData || !bikeData) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Booking not found');
  }
  const returnTime = new Date();
  const durationInHours = (returnTime.getTime() - bookingData.startTime.getTime()) / (1000 * 60 * 60);
  const totalCost = durationInHours * bikeData.pricePerHour;

  const booking = {
    returnTime: returnTime,
    totalCost: totalCost,
    isReturned: true
  }
  const result = await Booking.findByIdAndUpdate(bookingId, booking, {
    new: true,
  });
  return result;
};

export const BookingServices = {
  createBookingIntoDB,
  getUsersAllBookingsFromDB,
  updateBookingFromDB
};
