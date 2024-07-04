import { BikeServices } from './bike.services';
import bikeValidationSchema from './bike.validation';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { TBike } from './bike.interface';

const createBike = catchAsync(async (req, res) => {
  const result = await BikeServices.createBikeIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bike added successfully',
    data: result
  });
});

const getAllBikes = catchAsync(async (req, res) => {
  const { searchTerm } = req.query;
  const result = await BikeServices.getAllBikesFromDB(
    (searchTerm as string) ?? null,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bikes retrieved successfully',
    data: result
  });
});

const getSingleBike = catchAsync(async (req, res) => {
  const { bikeId } = req.params;
  const result = await BikeServices.getSingleBikeFromDB(bikeId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bike retrieved successfully',
    data: result
  });
});

const updateBike = catchAsync(async (req, res) => {
  const { bikeId } = req.params;
  const bikeData: Partial<TBike> = req.body;
  const result = await BikeServices.updateBikeFromDB(bikeId, bikeData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bike updated successfully',
    data: result
  });
});

const deleteBike = catchAsync(async (req, res) => {
  const { bikeId } = req.params;
  const result = await BikeServices.deleteBikeFromDB(bikeId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bike deleted successfully',
    data: result
  });
});

export const BikeControllers = {
  getAllBikes,
  createBike,
  getSingleBike,
  updateBike,
  deleteBike,
};
