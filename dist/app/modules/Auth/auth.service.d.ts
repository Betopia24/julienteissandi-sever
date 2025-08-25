import { ICreateUser, ILoginUser } from '../../interface/user.interface';
export declare const AuthService: {
    createUser: (userData: ICreateUser) => Promise<{
        user: {
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
            role: import("../../../../generated/prisma").$Enums.UserRole;
            isActive: boolean;
            canChangePassword: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
        accessToken: string;
        refreshToken: string;
    }>;
    loginUser: (loginData: ILoginUser) => Promise<{
        user: {
            id: string;
            email: string;
            firstName: string;
            lastName: string;
            role: import("../../../../generated/prisma").$Enums.UserRole;
        };
        accessToken: string;
        refreshToken: string;
    }>;
    refreshToken: (refreshToken: string) => Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    logoutUser: (userId: string) => Promise<{
        message: string;
    }>;
};
//# sourceMappingURL=auth.service.d.ts.map