import { useQuery, gql } from "@apollo/client";
import Table from "./Table";

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

export default function DisplayData() {
  const { data, loading, error } = useQuery(GET_USERS);
  const { data: movieData, loading: movieLoading } = useQuery(GET_MOVIES);

  if (error) {
    console.error(error);
  }
  return (
    <>
      <Table tdata={data?.users} tableTitle="Users" tdloading={loading} />
      <Table
        tdata={movieData?.movies}
        tableTitle="Movies"
        tdloading={movieLoading}
      />
    </>
  );
}
