interface ListUsersProp {
  users : any[];
}

const ListUsers = (props: ListUsersProp) => {

  return (
    <>
      <table data-testid='listUser' className="table mt-5 text-center">
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
              <td data-testid={`id ${user.usuario_id}`}>{user.usuario_id}</td>
              <td data-testid={`name ${user.usuario_id}`}>{user.name}</td>
              <td><button data-testid={`button ${user.usuario_id}`}
                className="btn"
                onClick={() => window.location.href = "/connections/" + user.usuario_id}>
                {user.name + " connections"}
              </button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListUsers;
