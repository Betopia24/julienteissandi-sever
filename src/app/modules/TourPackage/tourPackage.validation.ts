import { z } from 'zod';

// Daily activity validation schema
const dailyActivitySchema = z.record(
  z.string().regex(/^day\d+$/, 'Day key must be in format: day1, day2, day3, etc.'),
  z.object({
    title: z.string().min(1, 'Day title is required'),
    description: z.string().min(1, 'Day description is required'),
  })
);

export const createTourPackageZodSchema = z.object({
  body: z.object({
    packageName: z.string().min(1, 'Package name is required').max(100, 'Package name too long'),
    totalMembers: z.number().int('Total members must be a whole number').positive('Total members must be positive').max(1000, 'Total members cannot exceed 1000'),
    pricePerPerson: z.number().positive('Price per person must be positive').max(10000, 'Price per person cannot exceed 10000'),
    startDay: z.string().datetime('Start day must be a valid date'),
    endDay: z.string().datetime('End day must be a valid date'),
    citiesVisited: z.array(z.string().min(1, 'City name cannot be empty')).min(1, 'At least one city must be specified').max(50, 'Cannot exceed 50 cities'),
    tourType: z.string().min(1, 'Tour type is required').max(50, 'Tour type too long'),
    activities: z.array(z.string().min(1, 'Activity cannot be empty')).min(1, 'At least one activity must be specified').max(100, 'Cannot exceed 100 activities'),
    dailyActivity: dailyActivitySchema,
    highlights: z.string().min(1, 'Highlights are required').max(500, 'Highlights too long'),
    description: z.string().min(1, 'Description is required').max(2000, 'Description too long'),
    photos: z.array(z.string().url('Photo must be a valid URL')).min(1, 'At least one photo is required').max(20, 'Cannot exceed 20 photos'),
    status: z.enum(['ACTIVE', 'INACTIVE']).optional().default('ACTIVE'),
  }).refine((data) => {
    const startDate = new Date(data.startDay);
    const endDate = new Date(data.endDay);
    return endDate > startDate;
  }, {
    message: 'End day must be after start day',
    path: ['endDay'],
  }),
});

export const updateTourPackageZodSchema = z.object({
  body: z.object({
    packageName: z.string().min(1, 'Package name cannot be empty').max(100, 'Package name too long').optional(),
    totalMembers: z.number().int('Total members must be a whole number').positive('Total members must be positive').max(1000, 'Total members cannot exceed 1000').optional(),
    pricePerPerson: z.number().positive('Price per person must be positive').max(10000, 'Price per person cannot exceed 10000').optional(),
    startDay: z.string().datetime('Start day must be a valid date').optional(),
    endDay: z.string().datetime('End day must be a valid date').optional(),
    citiesVisited: z.array(z.string().min(1, 'City name cannot be empty')).min(1, 'At least one city must be specified').max(50, 'Cannot exceed 50 cities').optional(),
    tourType: z.string().min(1, 'Tour type cannot be empty').max(50, 'Tour type too long').optional(),
    activities: z.array(z.string().min(1, 'Activity cannot be empty')).min(1, 'At least one activity must be specified').max(100, 'Cannot exceed 100 activities').optional(),
    dailyActivity: dailyActivitySchema.optional(),
    highlights: z.string().min(1, 'Highlights cannot be empty').max(500, 'Highlights too long').optional(),
    description: z.string().min(1, 'Description cannot be empty').max(2000, 'Description too long').optional(),
    photos: z.array(z.string().url('Photo must be a valid URL')).min(1, 'At least one photo is required').max(20, 'Cannot exceed 20 photos').optional(),
    status: z.enum(['ACTIVE', 'INACTIVE']).optional(),
  }).refine((data) => {
    if (data.startDay && data.endDay) {
      const startDate = new Date(data.startDay);
      const endDate = new Date(data.endDay);
      return endDate > startDate;
    }
    return true;
  }, {
    message: 'End day must be after start day',
    path: ['endDay'],
  }),
  params: z.object({
    id: z.string().min(1, 'Tour package ID is required'),
  }),
});
