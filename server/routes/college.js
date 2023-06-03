import express from 'express'

// import { isAuthenticated } from '../middleWares/auth.js'

import { createCollege, getAllRelated } from '../controller/college.js'



const router = express.Router()

router.route('/all').post(getAllRelated)
router.route('/new').post(createCollege)


export default router