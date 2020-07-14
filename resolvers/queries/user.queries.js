let User = require("../../models/userModel");

module.exports = {
  getUsers: async () => {
    let users;
    try {
      users = await User.find();
    } catch (error) {
      console.error(error);
    }
    return users;
  },

  getUser: async (_, { _id }) => {
    let user;
    try {
      user = await User.find({ _id });
    } catch (error) {
      console.error(error);
    }
    return user;
  },
};
