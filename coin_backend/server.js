import { serve } from "https://deno.land/std@0.57.0/http/server.ts";
import { Application, send } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";

const app = new Application();

import router from "./router.js";

app.use(oakCors());
app.use(router.routes())

var port =8000 ;    

var land ='https://localhost/'

console.log(`server started at ${land} ${port}`)

await app.listen({ port: port });
