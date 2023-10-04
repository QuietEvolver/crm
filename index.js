import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";

const app = express();

app.get('/', (req, res) => {
    res.send(`GraphQL is an amazing query language for your API`);
});
const root = { hello: () => "Hi Earth!"};

app.use('/graphql', graphqlHTTP({
    schema: schema, 
    rootValue: root, 
    graphiql: true,
}));
// Add port server listens to
app.listen(8080, () => console.log('Running server on port localhost:8080/graphql'));

