const path = require('path');
const express = require('express');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { graphqlHTTP } = require('express-graphql');

const app = express();

const queryArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resArray = loadFilesSync(path.join(__dirname, '**/*.resolver.js'));

const schema = makeExecutableSchema({
    typeDefs : queryArray,
    resolvers: resArray
});

app.use('/graphql',graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(3000, ()=>{
    console.info('Listening on GraphQL server...');
});