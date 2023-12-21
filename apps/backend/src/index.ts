import { Hono } from "hono";
import { serve } from '@hono/node-server'
import { cors } from 'hono/cors'
import { queryDb } from './database/app'
const app = new Hono();
app.use('/', cors())
app.get('/', (c) => { 
   queryDb();
   return c.text('Hello Bun!') 
});

// serve(app, (opt) => {
//    console.log(`Hono is on port: ${opt.port}`)
// })

export default app;