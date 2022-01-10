import "./App.css";
import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react/context";
import CreateUser from "./components/CreateUser";
import ListOfUsers from "./components/ListOfUsers";

function App() {
  const client = new ApolloClient({
    uri: "https://rgnm2022server.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <CreateUser />
      <ListOfUsers />
    </ApolloProvider>
  );
}

export default App;
