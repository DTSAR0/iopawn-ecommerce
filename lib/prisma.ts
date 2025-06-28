import { PrismaClient } from '../lib/generated/prisma'; 

declare global {
  var db: PrismaClient | undefined;
}

export const db = global.db ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') global.db = db;
