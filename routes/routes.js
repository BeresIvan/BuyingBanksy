const express = require("express")
const router = express.Router()
const signUpTemplateCopy = require("../models/signUpModels")
const bcrypt = require("bcrypt")

router.post("/signup", async (request, response) =>{

    const saltPassword = await bcrypt.generateSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)
    
    const signedUpUser = new signUpTemplateCopy({
        userName:request.body.userName,
        email:request.body.Eamil,
        password:securePassword
    })
    signedUpUser.save()
    .then(data => {
        response.json(data) 
    })
    .catch(error => {
        response.json(error)
    })
})


module.exports = router 