const { UserList, MovieList } = require("../dummy");
const _ = require("lodash");

const resolvers = {
  Query: {
    users: () => {
      return UserList;
    },
    user: (parent, args) => {
      const id = args.id;

      const user = _.find(UserList, { id });

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
    favoriteMovies: () => {
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
};

module.exports = { resolvers };
