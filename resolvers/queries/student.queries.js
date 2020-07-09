let User = require("../../models/userModel");

module.exports = {
  getStudents: async () => {
    let students;
    try {
      students = await User.find();
    } catch (error) {
      console.error(error);
    }
    return students;
  },

  getStudent: async (_, { _id }) => {
    let student;
    try {
      student = await User.find({ _id });
    } catch (error) {
      console.error(error);
    }
    return student;
  },
};
