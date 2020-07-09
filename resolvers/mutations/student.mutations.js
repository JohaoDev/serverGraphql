let User = require("../../models/userModel");

module.exports = {
  createStudent: async (_, { input }) => {
    let users;
    try {
      await User.create(input);
      users = await User.find();
    } catch (error) {
      console.error(error);
    }
    return users;
  },

  updateStudent: async (_, { _id, input }) => {
    let user;
    try {
      await User.updateOne({ _id }, { $set: input });
      user = await User.find({ _id });
    } catch (error) {
      console.error(error);
    }
    return user;
  },

  deleteStudent: async (_, { _id }) => {
    let users;
    try {
      await User.deleteOne({ _id });
      users = await User.find();
    } catch (error) {
      console.error(error);
    }
    return users;
  },
};

/* CREATE USERS */
// mutation {
// createStudent(input: {
// name: "Johao",
// lastname: "Perlaza",
// email: "johao@gmail.com",
// password: "1234"
// }) {
// _id
// email
// password
// }
// }

/* UPDATE USERS */
// mutation {
//   updateStudent(_id: "5f06838dfd001e6e113e0f86", input: {
//     email: "test@gmail.com"
//     password: "5678"
//   }) {
//     email
//     password
//   }
//   }

/* DELETE USERS */
// mutation {
// deleteStudent(_id: "5f06838ffd001e6e113e0f89") {
// _id
// email
// password
// }
// }
