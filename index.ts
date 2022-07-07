import express, {json} from "express"

import cors from "cors"
import battleRouter from "./routes/battleRoutes.js"

const app = express();

app.use(cors())
app.use(json())
app.use(battleRouter)

// app.get("/ranking" , (req: Request,res: Response)=>{
//     const body = req.body
// })


const port = 5000
app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})