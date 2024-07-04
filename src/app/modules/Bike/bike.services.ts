import { TBike } from './bike.interface';
import { Bike } from './bike.model';

const createBikeIntoDB = async (bike: Partial<TBike>) => {
  const result = await Bike.create(bike);
  return result;
};

const getAllBikesFromDB = async (searchTerm?: string) => {
  const result = await Bike.find(
    searchTerm === null
      ? {}
      : {
        $or: [
          { name: { $regex: searchTerm, $options: 'i' } },
          { description: { $regex: searchTerm, $options: 'i' } },
          { cc: { $regex: searchTerm, $options: 'i' } },
          { year: { $regex: searchTerm, $options: 'i' } },
          { brand: { $regex: searchTerm, $options: 'i' } },
        ],
      },
  );
  return result;
};

const getSingleBikeFromDB = async (id: string) => {
  const result = await Bike.findOne({ _id: id });
  return result;
};

const updateBikeFromDB = async (bikeId: string, bike: Partial<TBike>) => {
  const result = await Bike.findByIdAndUpdate(bikeId, bike, {
    new: true,
  });
  return result;
};

const deleteBikeFromDB = async (bikeId: string) => {
  const result = await Bike.deleteOne({ _id: bikeId });
  return result;
};

export const BikeServices = {
  createBikeIntoDB,
  getAllBikesFromDB,
  getSingleBikeFromDB,
  updateBikeFromDB,
  deleteBikeFromDB,
};
