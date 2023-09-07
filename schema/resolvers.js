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
};

module.exports = { resolvers };
