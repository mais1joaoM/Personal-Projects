const mongoose = require('../database');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        unique: true,
        lowercase: true,
        required: true,
    },
    pass:{
        type: String,
        required: true,
        select: false,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

userSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.pass, 10);
    this.pass = hash;

    next();
})

const user = mongoose.model('user', userSchema);

module.exports = user;