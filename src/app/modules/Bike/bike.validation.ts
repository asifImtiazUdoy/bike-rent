import { z } from 'zod';


const bikeValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required!' }),
    description: z.string({ required_error: 'Description is required!' }),
    pricePerHour: z.number({ required_error: 'Price is required!' }).positive(),
    cc: z.number({ required_error: 'Bike cc is required!' }),
    year: z.number({ required_error: 'Bike year is required!' }),
    model: z.string({ required_error: 'Bike model is required!' }),
    brand: z.string({ required_error: 'Bike brand is required!' })
  })
});

// Export the Zod schemas
export default bikeValidationSchema;
