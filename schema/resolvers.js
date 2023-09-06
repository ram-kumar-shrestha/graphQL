const { UserList } = require("../dummy");

const resolvers = {
  Query: {
    users: () => {
      return UserList;
    },
  },
};

module.exports = { resolvers };
