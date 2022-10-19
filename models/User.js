const { Schema, model } = require('mongoose');

// TODO add User properties and validations according to assigmentg
const userSchema = new Schema({
    username: { type: String, required: true, unique: true, minlength: [3, 'Username must be at least 3 charecters long'] },
    hashedPassword: { type: String, required: true }

});
   
userSchema.index({username: 1}, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

  const User = model('User', userSchema);

  module.exports = User;