import { useState } from "react";
import { CREATE_USER } from "../Graphql/Mutation";
import { useMutation } from "@apollo/client";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [createUser, { error }] = useMutation(CREATE_USER);

  return (
    <div>
      <div className="App">
        <h1>Welcome to React GraphQL MySQL Nodejs Stack!</h1>
      </div>

      <div className="createUser">
        <input
          type="text"
          placeholder="name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button
          onClick={() => {
            createUser({
              variables: {
                name: name,
                username: username,
                password: password,
              },
            });
          }}
        >
          Create User
        </button>
      </div>
    </div>
  );
};

export default CreateUser;
