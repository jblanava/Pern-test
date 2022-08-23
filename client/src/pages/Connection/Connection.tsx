import { useEffect, useState } from "react";
import InputConnection from "../../components/Connections/InputConnection";
import ListConnections from "../../components/Connections/ListConnections";
import { useParams } from "react-router-dom";
import { URL_BASE } from "../../App";
import { useTranslation } from "react-i18next";
import LngDropDown from "../../components/commons/dropDownLanguage";

export interface ConnectionInterface {
  user1_id: number;
  user2_id: number;
}

interface connection {
  user1_id: number;
  user2_id: number;
}

export const Connection = (props: any) => {
  const params = useParams();
  let getConnectionTableString = URL_BASE + "/connections-table";
  const isGeneral: boolean = params.id === undefined;
  if (!isGeneral) getConnectionTableString += "/" + params.id;

  const [connections, setConnections] = useState<connection[]>([]);

  const onSubmitForm = (e: any, user1: string, user2: string) => {
    e.preventDefault();
    fetch(URL_BASE + "/connections/" + user1 + "/" + user2, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return res.json();
        }
      })
      .then((resJson: any) => {
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
        return res.json();
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
    return fetch(URL_BASE + "/users/" + id)
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
  const { t } = useTranslation();
  const InputConnectionHTML = isGeneral ? (
    <InputConnection onSubmitForm={onSubmitForm} />
  ) : (
    <h1 className="text-center mt-5">
      {t("EspecificConnectionsTitle", { id: params.id })}
    </h1>
  );

  return (
    <>
      <div className="container">
        <button
          className="btn btn-primary mt-3"
          onClick={() => (window.location.href = "/")}
        >
          {t("userLink")}
        </button>

        <LngDropDown lngs={props.lngs}></LngDropDown>

        {InputConnectionHTML}
        <ListConnections list={connections} />
      </div>
    </>
  );
};

export default Connection;
