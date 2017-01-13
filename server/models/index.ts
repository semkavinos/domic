import { User } from './user';
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

export { User };
