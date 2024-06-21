const express = require("express")
const { getUserDetails } = require("../controllers/admin")
const adminAuth = require("../middlewares/Auth.admin")
/*
    Admin role in this app
    
    1) Must be able to add products                    -
    2) Must be able to add category to the site
    3) Must be able to view all orders                  
    4) Must be able to view all payments of the orders placed by a customer
        Chart (Bar graph of orders placed this month vs last month)
    5) Must be able to view all other admins and get details of a customer 

    Front end side

    1) Must be able to change landing page pictures
    2) Add trending list

*/
const adminRoute = express.Router()

adminRoute.get('/details',getUserDetails)


module.exports = adminRoute