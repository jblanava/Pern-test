import { Fragment} from "react";

interface ListUsersProp {
  users : any[];
}

const ListUsers = (props: ListUsersProp) => {

  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Connections</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user: any) => (
            <tr key={user.usuario_id}>
              <td>{user.usuario_id}</td>
              <td>{user.name}</td>
              <td><button
                className="btn"
                onClick={() => window.location.href = "/connections/" + user.usuario_id}>
                {user.name + " connections"}
              </button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListUsers;
