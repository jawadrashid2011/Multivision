var mongoose = require("mongoose"),
    encrypt = require("../utilities/encryption");

var userSchema = mongoose.Schema({
    firstName: {type: String, required: '{PATH} is required'},
    lastName: {type: String, required: '{PATH} is required'},
    username: {
        type: String,
        require: '{PATH} is required',
        unique: true
    },
    salt: {type: String, required: '{PATH} is required'},
    hashed_pwd: {type: String, required: '{PATH} is required'},
    roles: [String]
});
userSchema.methods = {
    authenticate: function(passwordToMatch) {
        return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    }
};

var User = mongoose.model("User", userSchema);

function createDefaultUsers() {
    User.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
            var salt, hash;
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'jawad');
            User.create({firstName: "Jawad", lastName: "Rashid", username: "jawad", salt: salt, hashed_pwd: hash, roles:["admin"]}) ;
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'asad');
            User.create({firstName: "Asad", lastName: "Aijaz", username: "asad", salt: salt, hashed_pwd: hash, roles:[]}) ;
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'amir');
            User.create({firstName: "Amir", lastName: "Rashid", username: "amir", salt: salt, hashed_pwd: hash}) ;
        }
    })
};

exports.createDefaultUsers = createDefaultUsers;