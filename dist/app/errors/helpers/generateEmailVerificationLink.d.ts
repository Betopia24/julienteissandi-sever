export declare const verification: {
    generateEmailVerificationLink: () => string[];
    generateHashedToken: (token: string) => string;
    generateForgotPasswordLink: () => {
        forgotPasswordLink: string;
        hashedToken: string;
    };
};
//# sourceMappingURL=generateEmailVerificationLink.d.ts.map