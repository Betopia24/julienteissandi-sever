import { Request, Response } from 'express';
export declare const UserController: {
    getUserProfile: (req: Request, res: Response, next: import("express").NextFunction) => void;
    updateUserProfile: (req: Request, res: Response, next: import("express").NextFunction) => void;
    verifyUserProfile: (req: Request, res: Response, next: import("express").NextFunction) => void;
    requestPasswordOtp: (req: Request, res: Response, next: import("express").NextFunction) => void;
    verifyPasswordOtp: (req: Request, res: Response, next: import("express").NextFunction) => void;
    changePassword: (req: Request, res: Response, next: import("express").NextFunction) => void;
    requestResetPasswordOtp: (req: Request, res: Response, next: import("express").NextFunction) => void;
    verifyResetPasswordOtp: (req: Request, res: Response, next: import("express").NextFunction) => void;
    resetPassword: (req: Request, res: Response, next: import("express").NextFunction) => void;
    resendOtp: (req: Request, res: Response, next: import("express").NextFunction) => void;
    softDeleteUser: (req: Request, res: Response, next: import("express").NextFunction) => void;
};
//# sourceMappingURL=user.controller.d.ts.map