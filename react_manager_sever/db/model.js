const md5 = require('blueimp-md5')

//connect to database
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/React_Manager_System')
const conn = mongoose.connection
conn.on('connected', function () {
    console.log('database connect successfully');
})

//define User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String },
    email: { type: String },
    create_time: { type: Number, default: Date.now },
    role_id: { type: String }
})

//define Model
const UserModel = mongoose.model('user', userSchema)

//Initial default user Admin => username: admin, password: admin
UserModel.findOne({username: 'admin', password: md5('admin')}).then(user => {
    if(!user){
        UserModel.create({username: 'admin', password: md5('admin')}).then(user => {
            console.log('Initial default user Admin => username: admin, password: admin');
        })
    }
})

//export model
exports.UserModel = UserModel