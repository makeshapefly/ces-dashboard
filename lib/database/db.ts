import { createKysely } from '@vercel/postgres-kysely';
import { Database } from './types'
 
export const db = createKysely<Database>(
  {
    connectionString: 'postgres://neondb_owner:cGoyT2uU1lsL@ep-odd-cherry-a2ybc84n-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require'
  }
);
 