import { useState } from "react";
import { UPDATE_PASSWORD } from "../Graphql/Mutation";
import { useMutation } from "@apollo/client";

const UpdatePassword = () => {
  const [username, setUsername] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD);

  return (
    <div>
      <input
        type="text"
        placeholder="Username..."
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Old or Current Password..."
        onChange={(event) => {
          setCurrentPassword(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder="New Password..."
        onChange={(event) => {
          setNewPassword(event.target.value);
        }}
      />

      <button
        onClick={() => {
          updatePassword({
            variables: {
              username: username,
              oldPassword: currentPassword,
              newPassword: newPassword,
            },
          });
        }}
      >
        Update Password...
      </button>
    </div>
  );
};

export default UpdatePassword;
