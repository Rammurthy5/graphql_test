const friendDatabase = {};

class Friend {
    constructor (id, {firstName, lastName, gender, age, email, contacts}) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.gender = gender
        this.email = email
        this.age = age
        this.contacts = contacts
    }
}

// without using graphql-tools package
// const resolvers = { 
//     getFriend: ({ id }) => {
//         return new Friend(id, friendDatabase)
//     },
//     createFriend: ({input}) => {
//         let id = require('crypto').randomBytes(10).toString('hex');
//         friendDatabase[id] = input;
//         return new Friend(id, input);
//     }
// };

// resolver map (part of graphql-tools package)
export const resolvers = { 
    Query: {
        getFriend: ({ id }) => {
            return new Friend(id, friendDatabase)
        },
    },
    Mutation: {
        createFriend: ({input}) => {
            let id = require('crypto').randomBytes(10).toString('hex');
            friendDatabase[id] = input;
            return new Friend(id, input);
        }
    }
};

export default resolvers;