import { Hono } from "hono";
import { cors } from 'hono/cors'

import { getPosts, getPostBySlug } from './database/app'
import { serve } from "@hono/node-server";

const app = new Hono();

app.use('/', cors())
app.get('/', async (c) => { 
   const posts = await getPosts();
   return c.json(posts)
});

// Get by Slug
app.get('/:slug', async (c) => { 
   const slug = c.req.param('slug')
   const posts = await getPostBySlug(slug);

   return c.json(posts)
});

serve(app, (opt) => {
   console.log(`Hono is on port: ${opt.port}`)
});

export default app;