### Install NPM

npm init

npm install babel-cli babel-preset-env babel-preset-stage-0

npm install express express-graphql graphql nodemon 

npm install sequelize sqlite3 lodash casual

npm start




Sample mutation:

    mutation {
  createFriend(input: {
    firstName: "Ram"
    lastName: "S"
    gender: MALE
  }){
    id
    firstName
    gender
  }
}


Sample Query

query {
    firstName
    lastName
}
