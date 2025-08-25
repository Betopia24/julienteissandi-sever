import jwt, { Secret } from 'jsonwebtoken';
export declare const generateToken: {
    generateAccessToken: (payload: object) => string;
    generateRefreshToken: (payload: object) => string;
    generatePasswordResetToken: (payload: object) => string;
    verifyToken: (token: string, secret: Secret) => string | jwt.JwtPayload;
};
//# sourceMappingURL=generateToken.d.ts.map