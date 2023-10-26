import { z } from "zod";

export const SignInSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(10, "Password must contain atleast 10 characters"),
});

export type TSignInSchema = z.infer<typeof SignInSchema>;

export const ServerSchema = z.object({
  username: z.string().min(4, "Username should be atleast 4 chracters"),
  email: z.string().email("Invalid email"),
  password: z.string().min(10, "Password must contain atleast 10 characters"),
});

export const SignUpSchema = ServerSchema.merge(
  z.object({ confirmPassword: z.string().min(10, "Password confirmation is required") })
).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Passwords do not match",
});

export type TSignUpSchema = z.infer<typeof SignUpSchema>;
