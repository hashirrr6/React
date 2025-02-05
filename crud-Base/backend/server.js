import express from "express"
import env from "dotenv"
import router from "./router.js"
import cors from "cors"
import connection from "./connection.js"
env.config()

const app = express()

app.use(cors())
app.use(express.static("../frontend"))
app.use(express.json({limit:"100mb"}))
app.use("/api",router);

connection().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server started on port http://localhost:${process.env.PORT}`);
        
    })
}
)