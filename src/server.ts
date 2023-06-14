import express from 'express'
import cors from 'cors'

import router from './routes/router'


const app = express();


app.use(cors())
app.use(express.json())
app.use(router)


app.listen({
    host: "0.0.0.0",
    port: process.env.PORT ? Number(process.env.PORT) : 3000,
  }, () => {
    console.log("Server Running port:3000");
  })
  
