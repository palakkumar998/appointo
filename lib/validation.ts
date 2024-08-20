import { z } from "zod";

export const UserFormValidation = z.object({
    name: z.string()
        .min(2, "Name must be at least 2 characters.")
        .max(50, "Name must be at least 50 characters."),
    email: z.string().email("Invalid email address"),
    phone: z.string().refine((Phone) => /^\+?[1-9]\d{1,14}$/.test(phone), 'Invalid Phone Number')

})
