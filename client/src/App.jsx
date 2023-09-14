import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import DisplayData from "./components/DisplayData";

export default function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql",
  });

  return (
    <ApolloProvider client={client}>
      <h2>GraphQL Client</h2>
      <DisplayData />
    </ApolloProvider>
  );
}
