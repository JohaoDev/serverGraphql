const { makeExecutableSchema } = require("graphql-tools"),
  { join } = require("path"),
  { readFileSync } = require("fs"),
  courseResolver = require("../resolvers/course.resolvers"),
  studentResolver = require("../resolvers/student.resolvers"),
  typeDefs = readFileSync(join(__dirname, "schema.graphql"), "utf-8"),
  schema = makeExecutableSchema({
    typeDefs,
    resolvers: [courseResolver, studentResolver],
  });

module.exports = { schema };
