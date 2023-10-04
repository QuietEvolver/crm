import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send(`GraphQL is an amazing query language for your API`);
});

// Add port server listens to
app.listen(3000, () => console.log('Running server on port localhost:8080/graphql'));

