// import User from '@/server/models/userModel';

// export default defineEventHandler(async event => {
//   try {
//     const { name, email } = await readBody(event);
//     await User.create({ name, email });
//     const user = await User.findOne({ email });
//     return user;
//   } catch (error) {
//     return createError(error);
//   }
// });