import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
  schema: './src/database/schema/post.ts',
  driver: 'mysql2', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
  dbCredentials: {
    uri: process.env.DATABASE_URL as string
  },
} satisfies Config;