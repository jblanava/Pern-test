import React, { Fragment, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { ConnectionInterface } from "../../App";



const ListEspecificConnections = () => {
  const params = useParams();
  const [connections, setConnections] = useState<any | any[]>([]);

  const GetConnections =  () => {

      const response =  fetch("http://localhost:3000/connections" + '/' + params.id);
      response.then((res) => {
        const jsonData = res.json();
        jsonData.then((resJson) => {
          const promisesArray = resJson.map((connection: ConnectionInterface) => {
            const user1_id = Promise.resolve(connection.user1_id);
            const name1Promise = getUserNamePromise(connection.user1_id);
            const name2Promise = getUserNamePromise(connection.user2_id);
            const user2_id = Promise.resolve(connection.user2_id);
  
            return Promise.all([user1_id,name1Promise, name2Promise, user2_id])
          });
          Promise.all(promisesArray).then((values) => {
            const tuples = values.map(entry => {
              return { user1_id: entry[0], user1_name: entry[1], user2_name: entry[2], user2_id: entry[3] } 
            })
            if (tuples.length == resJson.length) setConnections(tuples);
          });
        });
      }); 
  };

  useEffect(() => {
    GetConnections();
  }, []);

  const getUserNamePromise =  (id:number) => {
      const response =  fetch("http://localhost:3000/users" + "/" + id);
      return response.then((res) => {
        const jsonData =  res.json();
        return jsonData.then((resJsonData) => {
          return resJsonData.name;
        })
      });
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
          {connections.map((connection:any) => (
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

export default ListEspecificConnections;
