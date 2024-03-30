const express = require('express')

const productRouter = express.Router()

/*
    Each product must belong to a category
    Each product must show the stock left (If it is less in number)
    Each product must have a category which the admin can add to provide discount to the user (Show price in the page it self 10% off on selected items)
*/





module.exports = productRouter