import { Request, Response, NextFunction } from 'express';
import { UserRole } from '../../../generated/prisma';
export type AuthRequest = Request & {
    user?: {
        email: string;
        userId: string;
        role: UserRole;
    };
};
declare const auth: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const requireAdmin: (req: Request, res: Response, next: NextFunction) => void;
export declare const requireSuperAdmin: (req: Request, res: Response, next: NextFunction) => void;
export default auth;
//# sourceMappingURL=auth.d.ts.map