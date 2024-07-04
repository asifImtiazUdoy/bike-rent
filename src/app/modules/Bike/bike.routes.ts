import express from 'express';
import { BikeControllers } from './bike.controller';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../User/user.constant';
import validateRequest from '../../middleware/validateRequest';
import bikeValidationSchema from './bike.validation';

const router = express.Router();

router.get('/', BikeControllers.getAllBikes);

router.post('/', auth(USER_ROLE.ADMIN), validateRequest(bikeValidationSchema), BikeControllers.createBike);

router.get('/:bikeId', BikeControllers.getSingleBike);

router.put('/:bikeId', auth(USER_ROLE.ADMIN), BikeControllers.updateBike);

router.delete('/:bikeId', auth(USER_ROLE.ADMIN), BikeControllers.deleteBike);

export const BikeRoutes = router;
