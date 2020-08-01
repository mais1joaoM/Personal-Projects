const express = require('express');
const User = require('../models/user');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

function generateToken(params = {}){
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
} 

//área de cadastro de usuários

router.post("/register", async (req, res) =>{
    const { email } = req.body;

    try{

        if (await User.findOne({ email }))
            return res.status(400).send({ error: 'User already exist' });


        const user = await User.create(req.body);

        user.pass = undefined;

        return res.send({ 
            user,
            token: generateToken({ id: user.id }),
         });

    }catch(err){
        return res.status(400).send({ error: 'Registration failed' })
    }
});

//área de validação de login

router.post("/authenticate", async (req, res) =>{
    const { email, pass } = req.body;

    const user = await User.findOne({ email }).select('+pass');

    if(!user)
        return res.status(400).send({ error: 'User not found' });

    if(!await bcrypt.compare(pass, user.pass))
        return res.status(400).send({ error: 'Invalid password' });

    user.pass = undefined;
    
    res.send({ 
        user,
        token: generateToken({ id: user.id }),
     });
});

module.exports = app => app.use("/auth", router);

