import { z } from 'zod';
export declare const updateUserProfileZodSchema: z.ZodObject<{
    body: z.ZodObject<{
        firstName: z.ZodOptional<z.ZodString>;
        lastName: z.ZodOptional<z.ZodString>;
        gender: z.ZodOptional<z.ZodEnum<{
            MALE: "MALE";
            FEMALE: "FEMALE";
            NON_BINARY: "NON_BINARY";
        }>>;
        phone: z.ZodOptional<z.ZodString>;
        address: z.ZodOptional<z.ZodString>;
        city: z.ZodOptional<z.ZodString>;
        state: z.ZodOptional<z.ZodString>;
        zip: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const requestOtpZodSchema: z.ZodObject<{
    body: z.ZodObject<{
        email: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const verifyOtpZodSchema: z.ZodObject<{
    body: z.ZodObject<{
        email: z.ZodString;
        otp: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const changePasswordZodSchema: z.ZodObject<{
    body: z.ZodObject<{
        email: z.ZodString;
        oldPassword: z.ZodString;
        newPassword: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const resetPasswordZodSchema: z.ZodObject<{
    body: z.ZodObject<{
        email: z.ZodString;
        newPassword: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=user.validation.d.ts.map