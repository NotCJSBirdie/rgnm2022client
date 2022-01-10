import "./App.css";
import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react/context";
import CreateUser from "./components/CreateUser";
import ListOfUsers from "./components/ListOfUsers";
import UpdatePassword from "./components/UpdatePassword";

// never forget that the uri must be in the /graphql route. because it won't work.
//all graphql apps need to be on the same route so yeah.
function App() {
  const client = new ApolloClient({
    uri: "https://rgnm2022server.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <CreateUser />
      <ListOfUsers />
      <UpdatePassword />
    </ApolloProvider>
  );
}

export default App;
