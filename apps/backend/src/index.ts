import { Hono } from "hono";
import { cors } from 'hono/cors'

import { getPosts } from './database/app'

const app = new Hono();
app.use('/', cors())
app.get('/', async (c) => { 
   const posts = await getPosts();
   return c.json(posts)
});

export default app;