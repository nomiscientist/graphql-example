const path = require('path');
const express = require('express');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');

const { ApolloServer } = require('apollo-server-express');


const queryArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resArray = loadFilesSync(path.join(__dirname, '**/*.resolver.js'));

async function startApolloServer() {

    const app = express();

    const schema = makeExecutableSchema({
        typeDefs : queryArray,
        resolvers: resArray
    });

    const server = new ApolloServer({
        schema: schema,
    });
    
    await server.start();
    server.applyMiddleware({app, path: '/graphql'});

    app.listen(3000, ()=>{
        console.info('Listening on GraphQL server...');
    });
}

startApolloServer();

