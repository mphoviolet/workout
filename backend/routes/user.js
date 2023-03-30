
const express = require('express');

const  {loginUser, signupUser}=require('../controllers/userControler')
const router = express.Router();

//login route
router.post('/login', loginUser)
//register route
router.post('/signup',  signupUser)

module.exports = router;