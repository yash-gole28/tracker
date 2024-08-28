import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, "Password must be at least 6 characters long").regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
    .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
    .regex(/\d/, { message: 'Password must contain at least one digit' })

});



export const signupSchema = z.object({
  firstName: z.string()
    .min(1, "First name is required")
    .max(30, "First name cannot exceed 30 characters")
    .regex(/^[A-Za-z]+$/, "First name must contain only alphabets.")
    .refine(value => value.trim().length > 0, {
      message: 'First name cannot be just spaces.',
    }),
  middleName: z.string().optional(),
  lastName: z.string()
    .min(1, "Last name is required")
    .max(30, "Last name cannot exceed 30 characters")
    .regex(/^[A-Za-z]+$/, "Last name must contain only alphabets.")
    .refine(value => value.trim().length > 0, {
      message: 'Last name cannot be just spaces.',
    }),
  username: z.string()
    .min(1, "Username is required")
    .max(30, "Username cannot exceed 30 characters")
    .refine(value => value.trim().length > 0, {
      message: 'Username cannot be just spaces.',
    }),
  email: z.string()
    .email("Invalid email address"),
  phoneNumber: z.string()
    .length(10, "Phone number must be exactly 10 digits"),
  dob: z.string()
    .min(1, "Date of birth is required")
    .refine(value => {
      const inputDate = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Set hours to 00:00:00 for accurate comparison
      return inputDate < today;
    }, {
      message: "Date of birth cannot be today or in the future.",
    }),
  gender: z.string()
    .nonempty("Gender is required"),
  password: z.string()
    .min(6, "Password must be at least 6 characters long")
    .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
    .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
    .regex(/\d/, { message: 'Password must contain at least one digit' }),
  confirmPassword: z.string()
    .min(6, 'Confirm password must be at least 6 characters long'),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords must match",
  path: ["confirmPassword"],
});

export const updateProfileSchema = z.object({
  firstName: z.string()
    .min(1, "First name is required")
    .max(30, "First name cannot exceed 30 characters")
    .regex(/^[A-Za-z]+$/, "First name must contain only alphabets.")
    .refine(value => value.trim().length > 0, {
      message: 'First name cannot be just spaces.',
    }),
  middleName: z.string().optional(),
  lastName: z.string()
    .min(1, "Last name is required")
    .max(30, "Last name cannot exceed 30 characters")
    .regex(/^[A-Za-z]+$/, "Last name must contain only alphabets.")
    .refine(value => value.trim().length > 0, {
      message: 'Last name cannot be just spaces.',
    }),
  username: z.string()
    .min(1, "Username is required")
    .max(30, "Username cannot exceed 30 characters")
    .refine(value => value.trim().length > 0, {
      message: 'Username cannot be just spaces.',
    }),
  email: z.string()
    .email("Invalid email address"),
  phoneNumber: z.string()
    .length(10, "Phone number must be exactly 10 digits"),
  dob: z.string()
    .min(1, "Date of birth is required")
    .refine(value => {
      const inputDate = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Set hours to 00:00:00 for accurate comparison
      return inputDate < today;
    }, {
      message: "Date of birth cannot be today or in the future.",
    }),
  gender: z.string()
    .nonempty("Gender is required"),
  addressLine1: z.string().nonempty("Address Line 1 is required"),
  addressLine2: z.string().optional(),
  postalCode: z.string().nonempty("Postal Code is required"),
  password: z.string()
    .min(6, "Password must be at least 6 characters long")
    .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
    .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
    .regex(/\d/, { message: 'Password must contain at least one digit' }),
  confirmPassword: z.string()
    .min(6, 'Confirm password must be at least 6 characters long'),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords must match",
  path: ["confirmPassword"],

});