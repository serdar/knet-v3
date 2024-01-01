import { Hono } from "hono";
import { cors } from 'hono/cors'

import { getPosts } from './database/app'
import { serve } from "@hono/node-server";

const app = new Hono();

app.use('/', cors())
app.get('/', async (c) => { 
   const posts = await getPosts();
   return c.json(posts)
});

serve(app, (opt) => {
   console.log(`Hono is on port: ${opt.port}`)
});

export default app;