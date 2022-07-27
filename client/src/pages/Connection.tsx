import React, { Fragment, useEffect, useState } from "react";
import InputConnection from "../components/Connections/InputConnection";
import ListConnections from "../components/Connections/ListConnections";
import { useParams } from "react-router-dom";

export interface ConnectionInterface {
  user1_id: number;
  user2_id: number;
}

interface connection {
  user1_id: number;
  user2_id: number;
}

export const Connections = () => {
  const params = useParams();
  let getConnectionTableString = "http://localhost:3000/connections-table";

  const isGeneral: boolean = params.id === undefined;

  if (!isGeneral) getConnectionTableString += "/" + params.id;
  console.log(getConnectionTableString);

  const [connections, setConnections] = useState<connection[]>([]);

  const onSubmitForm = (e: any, user1: string, user2: string) => {
    e.preventDefault();
    fetch("http://localhost:3000/connections/" + user1 + "/" + user2, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          res.json();
        }
      })
      .then((resJson: any) => {
        console.log(resJson[0].user1_id);
        const name1Promise = getUserNamePromise(resJson[0].user1_id);
        const name2Promise = getUserNamePromise(resJson[0].user2_id);

        return Promise.all([name1Promise, name2Promise]).then((values) => {
          const tupla = {
            user1_id: resJson[0].user1_id,
            user1_name: values[0],
            user2_name: values[1],
            user2_id: resJson[0].user2_id,
          };
          setConnections((prevConnections) => prevConnections.concat(tupla));
        });
      })
      .catch((reason) =>
        console.error("Create connection promise rejected : " + reason)
      );
  };

  const getConnectionsTable = () => {
    fetch(getConnectionTableString)
      .then((res) => {
        res.json();
      })
      .then((resJson: any) => {
        if (isGeneral) {
          setConnections(resJson.rows);
        } else {
          setConnections(resJson);
        }
      })
      .catch((reason) =>
        console.error("Especific connection promise rejected : " + reason)
      );
  };

  useEffect(() => {
    getConnectionsTable();
  }, []);

  const getUserNamePromise = (id: number) => {
    return fetch("http://localhost:3000/users/" + id)
      .then((res) => {
        const jsonData = res.json();
        return jsonData.then((resJsonData) => {
          return resJsonData.name;
        });
      })
      .catch((reason) =>
        console.error("Get username promise rejected : " + reason)
      );
  };

  const InputConnectionHTML = isGeneral ? (
    <InputConnection onSubmitForm={onSubmitForm} />
  ) : (
    <h1 className="text-center mt-5">User with ID {params.id} connections</h1>
  );

  return (
    <Fragment>
      <div className="container">
        <button
          className="btn btn-primary mt-3"
          onClick={() => (window.location.href = "/")}
        >
          Users
        </button>
        {InputConnectionHTML}
        <ListConnections list={connections} />
      </div>
    </Fragment>
  );
};
