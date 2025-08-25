import { ZodError } from 'zod';
declare const handleZodError: (error: ZodError) => {
    statusCode: number;
    message: string;
    errorDetails: {
        path: PropertyKey | undefined;
        message: string;
    }[];
};
export default handleZodError;
//# sourceMappingURL=handleZodError.d.ts.map