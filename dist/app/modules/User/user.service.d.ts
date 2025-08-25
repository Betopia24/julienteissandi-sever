import { IUpdateUser } from '../../interface/user.interface';
export declare const UserService: {
    getUserProfile: (email: string) => Promise<{
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        gender: import("../../../../generated/prisma").$Enums.Gender | null;
        phone: string | null;
        address: string | null;
        city: string | null;
        state: string | null;
        zip: string | null;
        isEmailVerified: boolean;
        role: import("../../../../generated/prisma").$Enums.UserRole;
        isActive: boolean;
        canChangePassword: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateUserProfile: (email: string, updateData: IUpdateUser) => Promise<{
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        gender: import("../../../../generated/prisma").$Enums.Gender | null;
        phone: string | null;
        address: string | null;
        city: string | null;
        state: string | null;
        zip: string | null;
        isEmailVerified: boolean;
        role: import("../../../../generated/prisma").$Enums.UserRole;
        isActive: boolean;
        canChangePassword: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    verifyUserProfile: (userId: string) => Promise<{
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        isEmailVerified: boolean;
        role: import("../../../../generated/prisma").$Enums.UserRole;
        isActive: boolean;
        canChangePassword: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    requestPasswordOtp: (email: string) => Promise<{
        message: string;
    }>;
    verifyPasswordOtp: (email: string, otp: string) => Promise<{
        message: string;
    }>;
    changePassword: (email: string, oldPassword: string, newPassword: string) => Promise<{
        message: string;
    }>;
    requestResetPasswordOtp: (email: string) => Promise<{
        message: string;
    }>;
    verifyResetPasswordOtp: (email: string, otp: string) => Promise<{
        message: string;
    }>;
    resetPassword: (email: string, newPassword: string) => Promise<{
        message: string;
    }>;
    resendOtp: (email: string) => Promise<{
        message: string;
    }>;
    softDeleteUser: (email: string) => Promise<{
        message: string;
    }>;
};
//# sourceMappingURL=user.service.d.ts.map