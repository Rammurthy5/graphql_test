import express from 'express';
// import schema from './schema_oldway';
import { graphqlHTTP } from 'express-graphql';
// import resolvers from './resolvers';
import { schema } from './schema';

//  commented out old way of doing things without graphql-tools

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!!')
});

// const root = resolvers;

app.use('/graphql', graphqlHTTP(
    {
        schema: schema,
        // rootValue: root,
        graphiql: true,
    }
));

app.listen(8080, () => console.log('Running on the port localhost:8080/graphql'));