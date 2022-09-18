// const mongoose = require("mongoose");
// const jwt = require ('jsonwebtoken'); 
// // const Joi = require ("joi") ; 
// // const passwordComplexity = require("joi-password-complexity")
// const userSchema = mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     }, 
//     email: {
//       type: String,
//       unique: true,
//       required: true,
//     },
//     password: {
//       required: true,
//       type: String,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );


// // const users = mongoose.model("Users", userSchema);
// // module.exports = users;

// userSchema.methods.generateAuthToken = function(){
//         const token = jwt.sign({ _id: this._id }, process.env.JWTSECRETKEY, {
//           expiresIn: "7d",
//         });
//         return token;
// }

// const User = mongoose.model("User" , userSchema); 

// const validate = (data) => {
//     const Schema = Joi.object({
//       name: Joi.string().required().label("User Name"),
//       email: Joi.string().email().required().label("Email"),
//       password: passwordComplexity().required().label("Password"),
//     });

//     return Schema.validate(data);
// }

// module.exports = { User
//     , validate 
// };



const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this.id }, process.env.JWTSECRETKEY, {
    expiresIn: "7d",
  });
  return token;
};
const User = mongoose.model("users", userSchema);

const validate = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().label("userName"),
    email: Joi.string().required().label("email"),
    // password: passwordComplexity(complexityOptions).required().label("password")
  });
  return schema.validate(data);
};

module.exports = { User, validate };