import { Hono } from "hono";
import { serve } from '@hono/node-server'
import { cors } from 'hono/cors'

const app = new Hono();
app.use('/', cors())
app.get('/', (c) => c.text('fdfdwwww'));

serve(app, (opt) => {
   console.log(`Hono is on port: ${opt.port}`)
})
// export default app;