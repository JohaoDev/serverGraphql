const studentQueries = require("./queries/student.queries"),
  studentMutations = require("./mutations/student.mutations");

module.exports = {
  Query: studentQueries,
  Mutation: studentMutations,
};
