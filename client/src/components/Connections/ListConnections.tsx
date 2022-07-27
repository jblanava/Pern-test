import React, { Fragment, useEffect, useState } from "react";
import { ConnectionInterface } from '../../App'

const ListConnections = () => {
  const [connections, setConnections] = useState<any | any[]>([]);

  const getConnections = () => {

    fetch("http://localhost:3000/connections")
    .then((res) => {
      res.json()
      .then((resJson) => {
        const promisesArray = resJson.rows.map((connection: ConnectionInterface) => {
          const name1Promise = getUserNamePromise(connection.user1_id);
          const name2Promise = getUserNamePromise(connection.user2_id);

          return Promise.all([name1Promise, name2Promise]).then((values) => {
            return { user1_id: connection.user1_id, user1_name: values[0], user2_name: values[1], user2_id: connection.user2_id }   
          })
        });
        Promise.all(promisesArray).then((values) => {
          if (values.length == resJson.rows.length){setConnections(values)}
          else { console.error("Error with final tuple")};
        }, (reason) => console.error("all names promise rejected : " + reason));
      }, (reason) => console.error("res.json() promise rejected : " + reason));
    }, (reason) => console.error("Especific connection promise rejected : " + reason));
  };

  useEffect(() => {
    getConnections();
  }, []);
  
  const getUserNamePromise = (id: number) => {
    return fetch("http://localhost:3000/users" + "/" + id)
    .then((res) => {
      const jsonData = res.json();
      return jsonData.then((resJsonData) => {
        return resJsonData.name;
      })
    }, (reason) => console.error("Get username promise rejected : " + reason));
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
          {connections.map((connection: any) => (
            <tr key={connection}>
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

export default ListConnections;
