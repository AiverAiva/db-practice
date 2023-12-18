import { users } from "../../models";
// import User from '@/server/models/userModel';
// interface IRequestBody {
//   email: string;
//   password: string;
//   name: string;
// }
export default defineEventHandler(async (event) => {
  console.log("POST /api/users");
  const { email, password, name } = await readBody(event); //<IRequestBody>
  try {
    const userData = await users.findOne({
      email,
    });
    if (userData) {
      console.log(`User with email ${email} already exists`);
      event.res.statusCode = 409;
      return {
        code: "USER_EXISTS",
        message: "User with given email already exists.",
      };
    } else {
      console.log("Create user");
      const newUserData = await users.create({
        email,
        password,
        name,
      });
      return {
        id: newUserData._id,
        name: newUserData.name,
      };
    }
  } catch (err) {
    console.dir(err);
    event.res.statusCode = 500;
    return {
      code: "ERROR",
      message: "Something wrong.",
    };
  }
});

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