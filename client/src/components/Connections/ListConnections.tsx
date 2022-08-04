interface ListProps{
  list: any[];
}

export const ListConnections = (props:ListProps) => {

  return (
    <>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th data-testid="u1IdHeader">User 1 ID</th>
            <th data-testid="u1NameHeader">User 1 Name</th>
            <th data-testid="u2NameHeader">User 2 Name</th>
            <th data-testid="u2IdHeader">User 2 ID</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((connection: any) => (
            <tr key={`${connection.user1_id}  ${connection.user2_id}`}>
              <td data-testid={`id1 ${connection.user1_id} id2 ${connection.user2_id}`}>{connection.user1_id}</td>
              <td data-testid={`name1 ${connection.user1_name}`}>{connection.user1_name}</td>
              <td data-testid={`name2 ${connection.user2_name}`}>{connection.user2_name}</td>
              <td data-testid={`id2 ${connection.user2_id} id1 ${connection.user1_id}`}>{connection.user2_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListConnections;
