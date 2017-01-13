let mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
});
export const User = mongoose.model('user', UserSchema);
