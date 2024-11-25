import connection from './db/index.js'
import app from "./app.js"
import"dotenv/config"

connection().then(()=>{
    app.listen(process.env.PORT || 8000,()=>console.log("Listening to port ",4000))
}).catch((err)=>{
    console.log("Connection failed ",err)
})