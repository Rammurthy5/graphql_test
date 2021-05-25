import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
type Friend {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    age: Int
    email: String
    contacts: [Contact]!
}

enum Gender {
    MALE
    FEMALE
    TRANS
}

type Contact {
    firstName: String
    lastName: String
}

type Query {
    getFriend(id: ID): Friend
}

input ContactInput {
    firstName: String
    lastName: String
}

input FriendInput {
    id: ID
    firstName: String
    lastName: String
    age: Int
    gender: Gender
    email: String
    contacts: [ContactInput]!
}

type Mutation {
    createFriend(input: FriendInput): Friend
}
`

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };