const express = require("express"),
  { makeExecutableSchema } = require("graphql-tools"),
  { graphqlHTTP } = require("express-graphql"),
  { join } = require("path"),
  { readFileSync } = require("fs"),
  testResolver = require("./resolvers/test.resolvers"),
  courseResolver = require("./resolvers/course.resolvers"),
  port = 3000;

let app = express();

const typeDefs = readFileSync(
    join(__dirname, "schemas", "schema.graphql"),
    "utf-8"
  ),
  schema = makeExecutableSchema({
    typeDefs,
    resolvers: [courseResolver, testResolver],
  });

app.use(
  "/gql",
  graphqlHTTP({ schema: schema, rootValue: courseResolver, graphiql: true })
);

app.listen(port, () => {
  //   console.log(`Server running at http://localhost:&{port}`);
  app
    ? console.log(`Server running at http://localhost:${port}`)
    : console.log("error");
});
