import 'dotenv/config'
import { drizzle } from 'drizzle-orm/planetscale-serverless'
import { connect } from '@planetscale/database'
import * as schema from '../database/schema/post'

// create the connection
export const connection = connect({
  url: process.env.DATABASE_URL
})

export const db = drizzle(connection, {schema});

export async function queryDb() {
  //db stuff
  console.log(`db`);
  const result = await db.query.posts.findMany();

  result.map( r => {
    console.log(`${r.name}`)
  })
}