import { GET_ALL_USERS } from "../Graphql/Queries";
import { useQuery } from "@apollo/client";
import { DELETE_USER } from "../Graphql/Mutation";
import { useMutation } from "@apollo/client";

const ListOfUsers = () => {
  const { data, loading } = useQuery(GET_ALL_USERS);

  if (data) {
    console.log(data);
  }

  const [deleteUser, { error }] = useMutation(DELETE_USER);

  return (
    <div>
      {data &&
        data.getAllUsers.map((user: any) => {
          return (
            <div>
              {user.name} / {user.username}
              <button
                onClick={() => {
                  deleteUser({
                    variables: {
                      id: user.id,
                    },
                  });
                }}
              >
                Delete User
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default ListOfUsers;
