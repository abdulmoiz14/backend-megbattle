import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: false },
  language_code: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
const User = mongoose.model('Users', userSchema, 'Users');
export { User };
