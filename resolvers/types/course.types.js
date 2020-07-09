let Course = require("../../models/courseModel");

module.exports = {
  Course: {
    participants: async ({ participants }) => {
      let participantsData, ids;
      try {
        ids = participants ? participants.map((id) => id) : [];
        participantsData =
          ids.length > 0 ? await Course.find({ _id: ids }) : [];
      } catch (error) {
        console.error(error);
      }
      return participantsData;
    },
  },
};
