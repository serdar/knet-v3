import { Hono } from "hono";
import { serve } from '@hono/node-server'
import { cors } from 'hono/cors'
import { getPosts } from './database/app'
import { posts } from './database/schema/post'
const app = new Hono();
app.use('/', cors())
app.get('/', async (c) => { 
   const posts = await getPosts();
   // return c.text(posts[0].title as string) 
   return c.json(posts)
});

// serve(app, (opt) => {
//    console.log(`Hono is on port: ${opt.port}`)
// })

export default app;