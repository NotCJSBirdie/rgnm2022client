import { GET_ALL_USERS } from "../Graphql/Queries";
import { useQuery } from "@apollo/client";

const ListOfUsers = () => {
  const { data, error, loading } = useQuery(GET_ALL_USERS);

  if (data) {
    console.log(data);
  }

  return (
    <div>
      {data &&
        data.getAllUsers.map((user: any) => {
          return (
            <div>
              {user.name} / {user.username}
            </div>
          );
        })}
    </div>
  );
};

export default ListOfUsers;
