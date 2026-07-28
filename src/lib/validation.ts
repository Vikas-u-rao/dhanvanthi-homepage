import { z } from "zod";

export const inquirySchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 characters")
    .regex(/^[+]?[0-9\s\-()]+$/, "Phone number contains invalid characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const clientInquirySchema = inquirySchema.extend({
  turnstileToken: z.string().min(1, "Please complete the spam verification check"),
});

export type InquiryInput = z.infer<typeof inquirySchema>;
export type ClientInquiryInput = z.infer<typeof clientInquirySchema>;
