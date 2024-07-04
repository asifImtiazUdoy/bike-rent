import { z } from 'zod';

const dateTimeSchema = z.string().refine((val) => !isNaN(Date.parse(val)), {
  message: "Invalid date and time format",
}).transform((val) => new Date(val));

const bookingValidationSchema = z.object({
  body: z.object({
    userId: z.string().optional(),
    bikeId: z.string(),
    startTime: dateTimeSchema,
    returnTime: dateTimeSchema.optional(),
    totalCost: z.number().optional(),
    isReturned: z.boolean().optional()
  })
});

export default bookingValidationSchema;
