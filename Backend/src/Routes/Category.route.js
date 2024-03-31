const express = require('express')
const adminAuth = require('../middlewares/Auth.admin')
const addCategory = require('../controllers/Category')

const categoryRouter = express.Router()

categoryRouter.post('/add',adminAuth,addCategory)
module.exports = categoryRouter