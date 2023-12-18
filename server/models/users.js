import mongoose from "mongoose";
import bcrypt from "mongoose-bcrypt";
const schema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, bcrypt: true },
    name: { type:String, required: true}
  },
  { timestamps: true, strict: true, strictQuery: true }
);
schema.plugin(bcrypt);
export default mongoose.model("User", schema, "user");