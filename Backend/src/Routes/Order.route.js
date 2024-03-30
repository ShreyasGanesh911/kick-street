const express = require('express')
const orderRouter = express.Router()

/*

    Admin must be able to create a new category where the product belongs to 
    Must be able to add multiple categories

*/

/**
 Basic categories 
    Men
    Women
    Unisex
    Sale / offer
    Street ware
    Casuals
    ACCESSORIES

 */
module.exports = orderRouter