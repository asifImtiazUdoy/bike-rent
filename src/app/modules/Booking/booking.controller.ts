import { BookingServices } from './booking.services';
import catchAsync from '../../utils/catchAsync';
import { TBooking } from './booking.interface';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { verifyToken } from '../Auth/auth.utils';
import config from '../../config';

const createBooking = catchAsync(async (req, res) => {
  const { user } = req;
  const { bikeId, startTime } = req.body;

  const bookingData = {
    userId: user.userId,
    bikeId: bikeId,
    startTime: startTime
  }

  const result = await BookingServices.createBookingIntoDB(bookingData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Rental created successfully',
    data: result
  });
});

const getUserAllBookings = catchAsync(async (req, res) => {
  const {userId} = req.user;

  const result = await BookingServices.getUsersAllBookingsFromDB(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Rental retrieved successfully',
    data: result
  });
});

const updateBooking = catchAsync(async (req, res) => {
  const {id} = req.params;

  const result = await BookingServices.updateBookingFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Rental retrieved successfully',
    data: result
  });
});

export const BookingControllers = {
  createBooking,
  updateBooking,
  getUserAllBookings
};
