import { Elysia } from "elysia";


const app = new Elysia().get("/", () => "Build Elysia RESTFUL API")
.get('/post/:id',({params: {id}}) =>{return {
   id:id,
   title: "Bun Restful API"
  }}).post('/post',({body,set})=>{
    set.status = 201
    return body
  })
.get('/track/*',() => {return 'Track Route'})
.get('/tracks/',() => {
  return new Response(JSON.stringify({
    "tracks":[
      "Sorairo Days",
      "Soldier Dream",
      "Abyss"
  ]
  }))

})

.listen(3000);


console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
