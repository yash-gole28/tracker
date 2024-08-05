import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, "Password must be at least 6 characters long").regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
  .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
  .regex(/\d/, { message: 'Password must contain at least one digit' })

});



export const signupSchema = z.object({
  username: z.string().min(1, "Username is required").max(30, "Username is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone number is required").max(10, "Phone number is required"),
  dob: z.string().min(1, "Date of birth is required"),
  gender: z.string().nonempty("Gender is required"),
  address1: z.string().min(1, "Address line 1 is required").max(100, "Address line 1 is required"),
  address2: z.string().optional(),
  postalCode: z.string().min(1, "Postal code is required").max(6, "Postal code is required"),
  password: z.string().min(6, "Password must be at least 6 characters long").regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
  .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
  .regex(/\d/, { message: 'Password must contain at least one digit' }),
  confirmPassword: z.string().min(6, "Confirm password must be at least 6 characters long"),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords must match",
  path: ["confirmPassword"],
});