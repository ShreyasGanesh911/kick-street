const connection = require('./db/index.js')
const app = require("./app.js")
const Error = require('./middlewares/Error.js')
require('dotenv').config()

app.use(Error)
connection().then(()=>{
    app.listen(process.env.PORT,()=>console.log("Listening to port ",4000))
}).catch((err)=>{
    console.log("Connection failed ",err)
})