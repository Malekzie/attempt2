import { z } from 'zod';

export const loginSchema = z.object({
	email: z.string().min(2).max(50),
	password: z.string().min(8).max(50)
});

export const registerSchema = z.object({
	username: z.string().min(2).max(50),
	email: z.string().email(),
	password: z.string().min(8).max(50)
});

export type LoginSchema = typeof loginSchema;
export type RegisterSchema = typeof registerSchema;
