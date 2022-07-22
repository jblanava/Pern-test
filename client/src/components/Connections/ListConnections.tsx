import React, { Fragment, useEffect, useState } from "react";
import { ConnectionInterface } from '../../App'

const ListConnections = () => {
  const [connections, setConnections] = useState<any | any[]>([]);

  // const getConnections = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3000/connections");
  //     const jsonData = await response.json();

  //     const tuples: any[] = [];
  //     await jsonData.rows.map(async (connection:ConnectionInterface) => {
  //       const u1 = await getUserNamePromise(connection.user1_id);
  //       const u2 = await getUserNamePromise(connection.user2_id);
  //       tuples.push({ user1_id: connection.user1_id, user1_name: u1, user2_name: u2, user2_id: connection.user2_id });
  //       setConnections(tuples);
  //     });

  //   } catch (err) {
  //     if(err instanceof Error){
  //       console.error(err.message);
  //   }else{
  //       console.error("Unexpected error",err);
  //   }
  //   }
  // };

  const getConnections =  () => {
    try {
      const response = fetch("http://localhost:3000/connections");
      response.then((res) => {
        const jsonData =  res.json();
        jsonData.then((resJson) => {
          const tuples: any[] = [];
          resJson.rows.map( (connection:ConnectionInterface) => {
            const name1Promise =  getUserNamePromise(connection.user1_id);
            const name2Promise =  getUserNamePromise(connection.user2_id);

            Promise.all([name1Promise,name2Promise]).then((values) => {
              console.log(values);
              tuples.push({ user1_id: connection.user1_id, user1_name: values[0], user2_name: values[1], user2_id: connection.user2_id });
              if(tuples.length == resJson.rows.length) setConnections(tuples); 
            });          
          });
        });
      })  

    } catch (err) {
      if(err instanceof Error){
        console.error(err.message);
    }else{
        console.error("Unexpected error",err);
    }
    }
  };

  useEffect(() => {
    getConnections();
  }, []);

  // const getUserNamePromise = async (id:number) => {
  //   try {
  //     const response = await fetch("http://localhost:3000/users" + "/" + id);
  //     const jsonData = await response.json();
  //     return jsonData.name;

  //   } catch (err) {
  //     if(err instanceof Error){
  //       console.error(err.message);
  //   }else{
  //       console.error("Unexpected error",err);
  //   }
  //   }
  // };

  const getUserNamePromise =  (id:number) => {
    try {
      const response =  fetch("http://localhost:3000/users" + "/" + id);
      return response.then((res) => {
        const jsonData =  res.json();
        return jsonData.then((resJsonData) => {
          //console.log(resJsonData.name);
          return resJsonData.name;
        })
      });

      
    } catch (err) {
      if(err instanceof Error){
        console.error(err.message);
    }else{
        console.error("Unexpected error",err);
    }
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

export default ListConnections;
