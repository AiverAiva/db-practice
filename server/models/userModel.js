// import mongoose from 'mongoose';
// import bcrypt from "mongoose-bcrypt";

// const userSchema = new mongoose.Schema({
//     name: {
//         type: 'string',
//         required: true,
//     },
//     email: {
//         type: 'string',
//         required: true,
//         unique: true
//     },
//     password: {
//         type: 'string',
//         required: true,
//         bcrypt: true
//     }
// }, {
//     versionKey: false, timestamps: true, strict: true, strictQuery: true
// });

// userSchema.plugin(bcrypt);
// const User = mongoose.model('User', userSchema);

// export default User;