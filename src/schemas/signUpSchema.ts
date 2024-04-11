import {z} from "zod"

const usernameValidation = z
    .string()
    .min(1, "Username is required! ")
    .max(15, "Username must be less than 15 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special characters")


export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Invalid email address"}),
    Password: z.string().min(6, {message: "Password must be at least 6 characters!"})
    });