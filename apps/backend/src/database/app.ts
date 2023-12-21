import 'dotenv/config'
import { drizzle } from 'drizzle-orm/planetscale-serverless'
import { connect } from '@planetscale/database'
import * as schema from '../database/schema/post'

// create the connection
export const connection = connect({
  url: process.env.DATABASE_URL
})

export const db = drizzle(connection, {schema});

export async function getPosts() {
  //db stuff
  console.log(`db`);
  return await db.query.posts.findFirst();
}