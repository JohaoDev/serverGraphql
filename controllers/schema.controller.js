const { makeExecutableSchema } = require("graphql-tools"),
  { graphqlHTTP } = require("express-graphql"),
  { join, dirname } = require("path"),
  { readFileSync } = require("fs"),
  testResolver = require("../resolvers/test.resolvers"),
  courseResolver = require("../resolvers/course.resolvers"),
  typeDefs = readFileSync(
    join(dirname("../"), "schemas", "schema.graphql"),
    "utf-8"
  ),
  schema = makeExecutableSchema({
    typeDefs,
    resolvers: [courseResolver, testResolver],
  });

let startGraphql = graphqlHTTP({
  schema,
  // rootValue: courseResolver,
  graphiql: true,
});

module.exports = {
  startGraphql,
};
