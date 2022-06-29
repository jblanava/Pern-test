import React, { Fragment, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const ListEspecificConnections = () => {
  const params = useParams();
  const [connections, setConnections] = useState([]);

  const GetConnections = async () => {
    try {
      const response = await fetch("http://localhost:3000/connections" + '/' + params.id);
      const jsonData = await response.json();

      const tuples = [];
      await jsonData.map(async connection => {
        const u1 = await getUserNamePromise(connection.user1_id);
        const u2 = await getUserNamePromise(connection.user2_id);
        tuples.push({ user1_id: connection.user1_id, user1_name: u1, user2_name: u2, user2_id: connection.user2_id })
        setConnections(tuples);
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    GetConnections();
  }, []);

  const getUserNamePromise = async (id) => {
    try {
      const response = await fetch("http://localhost:3000/users" + "/" + id);
      const jsonData = await response.json();
      return jsonData.name;
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>User 1 ID</th>
            <th>User 1 Name</th>
            <th>User 2 Name </th>
            <th>User 2 ID </th>
          </tr>
        </thead>
        <tbody>
          {connections.map(connection => (
            <tr key={[connection.user1_id, connection.user1_name, connection.user2_name, connection.user2_id]}>
              <td>{connection.user1_id}</td>
              <td>{connection.user1_name}</td>
              <td>{connection.user2_name}</td>
              <td>{connection.user2_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListEspecificConnections;
