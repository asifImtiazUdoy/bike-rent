import express from 'express';
import { BookingControllers } from './booking.controller';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../User/user.constant';
import validateRequest from '../../middleware/validateRequest';
import bookingValidationSchema from './booking.validation';

const router = express.Router();

router.post('/', auth(USER_ROLE.USER), validateRequest(bookingValidationSchema), BookingControllers.createBooking);

router.get('/', auth(USER_ROLE.USER), BookingControllers.getUserAllBookings);

router.put('/:id/return', auth(USER_ROLE.ADMIN), BookingControllers.updateBooking);

export const BookingRoutes = router;
