import { plugin } from "bun";
import { Elysia } from "elysia";


// Define plugin

const plugin = new Elysia()
.state('plugin-version',1)
.get('/form-plugin',() => "hi")
.get('/greet',() =>"hello dev" )


//Application
const app = new Elysia().get("/", () => "Build Elysia RESTFUL API")
.use(plugin)
  .state({
    id:1,
    email:"elysia@gmail.com",
  })
  .decorate('getDate', () => Date.now())
  .get('/post/:id', ({ params: { id } }) => {
    return {
      id: id,
      title: "Bun Restful API"
    }
  }).post('/post', ({ body, set,store }) => {
    console.log(store)
    set.status = 201
    return body
  })
  .get('/track/*', () => { return 'Track Route' })
  .get('/tracks/', ({store,getDate}) => {
    // return new Response(JSON.stringify({
    //   "tracks":[
    //     "Sorairo Days",
    //     "Soldier Dream",
    //     "Abyss"
    // ]
    // }), {
    //   headers: { "Content-Type": "application/json" }, 
    // })
    console.log(store)
    console.log(getDate())
    return {
      "tracks": [
        "Sorairo Days",
        "Soldier Dream",
        "Abyss"
      ]
    }
  })

  .listen(3000);


console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
