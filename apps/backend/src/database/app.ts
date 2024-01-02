import 'dotenv/config'
import { drizzle } from 'drizzle-orm/planetscale-serverless'
import { connect } from '@planetscale/database'
import * as schema from '../database/schema/post'
import { eq } from 'drizzle-orm'

// create the connection
export const connection = connect({
  url: process.env.DATABASE_URL
})

export const db = drizzle(connection, {schema});

export async function getPost(id: number) {
  return await db.query.posts.findMany({
    where: eq(schema.posts.id, id)
  })
}

export async function getPosts() {
  return await db.query.posts.findMany();
}

export async function getPostBySlug(slug: string) {
  return await db.query.posts.findMany({
    where: eq(schema.posts.slug, slug)
  });
}