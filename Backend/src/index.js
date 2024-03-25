const connection = require('./db/index.js')
const app = require("./app.js")
require('dotenv').config()


connection().then(()=>{
    app.listen(process.env.PORT,()=>console.log("Listening to port ",4000))
}).catch((err)=>{
    console.log("Connection failed ",err)
})