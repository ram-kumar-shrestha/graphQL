import { useQuery, useLazyQuery, gql } from "@apollo/client";
import Table from "./Table";
import { useState } from "react";

const GET_USERS = gql`
  query GetAllUsers {
    users {
      id
      name
      username
      age
      nationality
    }
  }
`;

const GET_MOVIES = gql`
  query GetAllMovies {
    movies {
      id
      title
      year
    }
  }
`;

const GET_MOVIE_BY_NAME = gql`
  query GetMovieByName($title: String!) {
    movie(title: $title) {
      title
      year
    }
  }
`;

export default function DisplayData() {
  const [movieSearched, setMovieSearched] = useState();
  const { data, loading, error } = useQuery(GET_USERS);
  const { data: movieData, loading: movieLoading } = useQuery(GET_MOVIES);
  const [fetchMovie, { data: movieSearchedData, error: movieSearchedError }] =
    useLazyQuery(GET_MOVIE_BY_NAME);

  if (error) {
    console.error(error);
  }
  return (
    <>
      <div className="wrapper">
        <div className="tables">
          <Table tdata={data?.users} tableTitle="Users" tdloading={loading} />
          <Table
            tdata={movieData?.movies}
            tableTitle="Movies"
            tdloading={movieLoading}
          />
        </div>

        <div className="search-movie">
          <div className="input-container">
            <input
              type="text"
              placeholder="Interstellar..."
              onChange={(e) => setMovieSearched(e.target.value)}
            />
            <button
              onClick={() =>
                fetchMovie({
                  variables: {
                    title: movieSearched,
                  },
                })
              }
            >
              Fetch Data
            </button>
          </div>

          <div>
            {movieSearchedError ? (
              <h4>Movie not found</h4>
            ) : (
              movieSearchedData && (
                <>
                  <h4>Movie Name: {movieSearchedData?.movie?.title}</h4>

                  <h4>Year of Publication: {movieSearchedData?.movie?.year}</h4>
                </>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
