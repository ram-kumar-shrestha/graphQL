const { UserList, MovieList } = require("../dummy");
const _ = require("lodash");

const resolvers = {
  Query: {
    users: () => {
      if (UserList) return { users: UserList };

      return {
        message: "No users found",
      };
    },
    user: (parent, args, context, info) => {
      const id = args.id;

      const user = _.find(UserList, { id });

      // console.log(context.req.headers);
      // console.log(info);

      return user;
    },

    movies: () => {
      return MovieList;
    },
    movie: (parent, args) => {
      const title = args.title;

      const movie = _.find(MovieList, { title });

      return movie;
    },
  },
  User: {
    favoriteMovies: (parent) => {
      // console.log(parent);
      return _.filter(
        MovieList,
        (movie) => movie.year > 2000 && movie.year < 2010
      );
    },
  },

  Mutation: {
    createUser: (parent, args) => {
      const input = args.input;

      const lastId = UserList[UserList.length - 1].id;

      input.id = +lastId + 1;

      UserList.push(input);

      return input;
    },

    updateUsername: (parent, args) => {
      const input = args.input;

      const user = _.find(UserList, { id: input.id });

      user.username = input.username;

      return user;
    },

    deleteUser: (parent, args) => {
      const id = args.id;

      const user = _.find(UserList, { id });

      _.remove(UserList, user);

      return user;
    },
  },

  UsersResult: {
    __resolveType(obj, context, info) {
      if (obj.message) {
        return "UsersErrorResult";
      }

      return "UsersSuccessfulResult";
    },
  },
};

module.exports = { resolvers };
