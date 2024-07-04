import { Router } from 'express';
import { UserRoutes } from '../modules/User/user.routes';
import { BikeRoutes } from '../modules/Bike/bike.routes';
import { BookingRoutes } from '../modules/Booking/booking.routes';
import { AuthRoutes } from '../modules/Auth/auth.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/bikes',
    route: BikeRoutes,
  },
  {
    path: '/rentals',
    route: BookingRoutes,
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;