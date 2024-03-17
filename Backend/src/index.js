const connection = require('./db/index.js')
const app = require("./app.js")

connection().then(()=>{
    app.listen(4000,()=>console.log("Listening to port ",4000))
}).catch((err)=>{
    console.log("Connection failed ",err)
})