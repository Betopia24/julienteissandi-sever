"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTourPackageZodSchema = exports.createTourPackageZodSchema = void 0;
const zod_1 = require("zod");
// Daily activity validation schema
const dailyActivitySchema = zod_1.z.record(zod_1.z.string().regex(/^day\d+$/, 'Day key must be in format: day1, day2, day3, etc.'), zod_1.z.object({
    title: zod_1.z.string().min(1, 'Day title is required'),
    description: zod_1.z.string().min(1, 'Day description is required'),
}));
exports.createTourPackageZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        packageName: zod_1.z.string().min(1, 'Package name is required').max(100, 'Package name too long'),
        totalMembers: zod_1.z.number().int('Total members must be a whole number').positive('Total members must be positive').max(1000, 'Total members cannot exceed 1000'),
        pricePerPerson: zod_1.z.number().positive('Price per person must be positive').max(10000, 'Price per person cannot exceed 10000'),
        startDay: zod_1.z.string().datetime('Start day must be a valid date'),
        endDay: zod_1.z.string().datetime('End day must be a valid date'),
        citiesVisited: zod_1.z.array(zod_1.z.string().min(1, 'City name cannot be empty')).min(1, 'At least one city must be specified').max(50, 'Cannot exceed 50 cities'),
        tourType: zod_1.z.string().min(1, 'Tour type is required').max(50, 'Tour type too long'),
        activities: zod_1.z.array(zod_1.z.string().min(1, 'Activity cannot be empty')).min(1, 'At least one activity must be specified').max(100, 'Cannot exceed 100 activities'),
        dailyActivity: dailyActivitySchema,
        highlights: zod_1.z.string().min(1, 'Highlights are required').max(500, 'Highlights too long'),
        description: zod_1.z.string().min(1, 'Description is required').max(2000, 'Description too long'),
        photos: zod_1.z.array(zod_1.z.string().url('Photo must be a valid URL')).min(1, 'At least one photo is required').max(20, 'Cannot exceed 20 photos'),
        status: zod_1.z.enum(['ACTIVE', 'INACTIVE']).optional().default('ACTIVE'),
    }).refine((data) => {
        const startDate = new Date(data.startDay);
        const endDate = new Date(data.endDay);
        return endDate > startDate;
    }, {
        message: 'End day must be after start day',
        path: ['endDay'],
    }),
});
exports.updateTourPackageZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        packageName: zod_1.z.string().min(1, 'Package name cannot be empty').max(100, 'Package name too long').optional(),
        totalMembers: zod_1.z.number().int('Total members must be a whole number').positive('Total members must be positive').max(1000, 'Total members cannot exceed 1000').optional(),
        pricePerPerson: zod_1.z.number().positive('Price per person must be positive').max(10000, 'Price per person cannot exceed 10000').optional(),
        startDay: zod_1.z.string().datetime('Start day must be a valid date').optional(),
        endDay: zod_1.z.string().datetime('End day must be a valid date').optional(),
        citiesVisited: zod_1.z.array(zod_1.z.string().min(1, 'City name cannot be empty')).min(1, 'At least one city must be specified').max(50, 'Cannot exceed 50 cities').optional(),
        tourType: zod_1.z.string().min(1, 'Tour type cannot be empty').max(50, 'Tour type too long').optional(),
        activities: zod_1.z.array(zod_1.z.string().min(1, 'Activity cannot be empty')).min(1, 'At least one activity must be specified').max(100, 'Cannot exceed 100 activities').optional(),
        dailyActivity: dailyActivitySchema.optional(),
        highlights: zod_1.z.string().min(1, 'Highlights cannot be empty').max(500, 'Highlights too long').optional(),
        description: zod_1.z.string().min(1, 'Description cannot be empty').max(2000, 'Description too long').optional(),
        photos: zod_1.z.array(zod_1.z.string().url('Photo must be a valid URL')).min(1, 'At least one photo is required').max(20, 'Cannot exceed 20 photos').optional(),
        status: zod_1.z.enum(['ACTIVE', 'INACTIVE']).optional(),
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
    params: zod_1.z.object({
        id: zod_1.z.string().min(1, 'Tour package ID is required'),
    }),
});
