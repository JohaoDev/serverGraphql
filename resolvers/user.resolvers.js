const userQueries = require("./queries/user.queries"),
  userMutations = require("./mutations/user.mutations"),
  userTypes = require("./types/user.types");

module.exports = {
  Query: userQueries,
  Mutation: userMutations,
  ...userTypes,
};
