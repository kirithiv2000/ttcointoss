import { Router } from "https://deno.land/x/oak/mod.ts";    

var router = new Router();

var array = ["head","tail","head","tail","head","tail","head","tail","head","tail"]


router
    .get("/head",(ctx)=>{
        var choice = array[Math.floor(Math.random() * array.length)]

        ctx.response.body = {message : choice};
    })

export default router;