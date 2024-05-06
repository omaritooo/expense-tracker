import { z } from 'zod'

const passwordStrength = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

const registerSchema = z.object({
    email: z.string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
    }).email({ message: "Invalid email address", }),
    password: z.string().regex(passwordStrength, 'Password must be at least 8 characters long, contain at least one lowercase letter, one uppercase letter, and one number'),
    confirmPassword: z.string().min(8, 'Password must be at least 8 characters').refine((data) => data === data.confirm, {
        message: 'Passwords do not match',
        path: ['passwordConfirm']
    })
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // path of error
});

type registerSchemaType = z.infer<typeof registerSchema>;
type errorType = z.ZodFormattedError<registerSchemaType> | null;

export { registerSchema, type registerSchemaType, type errorType };