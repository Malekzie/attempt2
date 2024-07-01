import { PrismaAdapter } from '@lucia-auth/adapter-prisma';
import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';
import { withPulse } from '@prisma/extension-pulse';

export const db = new PrismaClient()
	.$extends(withPulse({ apiKey: process.env.PULSE_API_KEY! }))
	.$extends(withAccelerate());

export const adapter = new PrismaAdapter(db.session, db.user);
