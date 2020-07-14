module.exports = {
  User: {
    __resolveType: (user, context, info) => {
      if (user.role === "Professor") {
        return "Professor";
      }

      if (user.role === "Student") {
        return "Student";
      }
    },
  },
};
