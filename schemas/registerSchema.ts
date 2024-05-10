import { z } from 'zod'

const passwordStrength = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

const registerSchema = z.object({
    email: z.string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
    }).email({ message: "Invalid email address", }),
    username: z.string({
        required_error: "Username is required",
        invalid_type_error: "Username must be a string",
    }).min(4, { message: 'Username must be at least 4 characters' }).max(16, { message: 'Username must not exceed 16 characters' }),
    firstName: z.string({
        required_error: "First Name is required",
        invalid_type_error: "First Name must be a string",
    }).min(4, { message: 'First Name must be at least 4 characters' }).max(16, { message: 'First Name must not exceed 20 characters' }),
    birthday: z.coerce.date().refine((data) => data < new Date(), { message: "Birthdate must not be in the future" }),
    lastName: z.string({
        required_error: "Last Name is required",
        invalid_type_error: "Last Name must be a string",
    }).min(4, { message: 'Last Name must be at least 4 characters' }).max(16, { message: 'Last Name must not exceed 20 characters' }),
    password: z.string().regex(passwordStrength, 'Password must be at least 8 characters long, contain at least one lowercase letter, one uppercase letter, and one number'),
    confirmPassword: z.string().regex(passwordStrength, 'Password must be at least 8 characters long, contain at least one lowercase letter, one uppercase letter, and one number'),
}).superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
        ctx.addIssue({
            code: "custom",
            message: "The passwords did not match"
        });
    }
})

type registerSchemaType = z.inferFlattenedErrors<typeof registerSchema>;
type errorType = registerSchemaType | null;

export { registerSchema, type registerSchemaType, type errorType };