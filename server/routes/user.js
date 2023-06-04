import express from 'express'
import { changePassword, forgetPassword, getMyProfile, logOut, login, register, resetPassword, updatePic, updateProfile } from '../controller/user.js'
import { isAuthenticated } from '../middleWares/auth.js'
// import { singleUpload } from '../middleWares/multer.js'

const router = express.Router()

router.post("/login", login)
router.post("/new", register)
router.get("/me", isAuthenticated, getMyProfile)
router.post("/logout", isAuthenticated, logOut)

// update route
// router.put("/updateprofile", isAuthenticated, updateProfile)
// router.put("/changepassword", isAuthenticated, changePassword)
// router.put("/updatepic", isAuthenticated, singleUpload, updatePic)

// forget password
// router.route("/forgetpassword").post(forgetPassword).put(resetPassword)

export default router