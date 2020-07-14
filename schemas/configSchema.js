const { makeExecutableSchema } = require("graphql-tools"),
  { join } = require("path"),
  { readFileSync } = require("fs"),
  courseResolver = require("../resolvers/course.resolvers"),
  userResolver = require("../resolvers/user.resolvers"),
  typeDefs = readFileSync(join(__dirname, "schema.graphql"), "utf-8"),
  schema = makeExecutableSchema({
    typeDefs,
    resolvers: [courseResolver, userResolver],
  });

module.exports = { schema };
