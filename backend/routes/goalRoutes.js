const express=require ('express')
const router=express.Router()
const {getGoals,setGoals,updateGoals,deleteGoals}=require("../controller/goalController.js")
const { errorHandler } = require('../middlewar/errorMiddlewar.js')

// router.get('/',getGoals)
// router.post('/',setGoals)
//bellow code is reduce the number of lie to code
router.route('/').get(getGoals).post(setGoals,errorHandler)

// router.put('/:id',updateGoals)
// router.delete('/:id',deleteGoals)
//bellow code is reduce the number of lie to code
router.route('/:id').put(updateGoals).delete(deleteGoals)



module.exports = router
