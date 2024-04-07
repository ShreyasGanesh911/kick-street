const express = require('express')
const adminAuth = require('../middlewares/Auth.admin')
const {addCategory,viewcategory, deleteCategory, updateCategory} = require('../controllers/Category')

const categoryRouter = express.Router()

categoryRouter.post('/add',adminAuth,addCategory)
categoryRouter.get('/all',adminAuth,viewcategory)
categoryRouter.delete('/remove/:_id',adminAuth,deleteCategory)
categoryRouter.put('/update',adminAuth,updateCategory)
module.exports = categoryRouter