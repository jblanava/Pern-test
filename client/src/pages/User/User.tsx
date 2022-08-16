import { useEffect, useState } from "react";
import { URL_BASE } from "../../App";
import InputUser from "../../components/Users/InputUser";
import ListUsers from "../../components/Users/ListUsers";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../components/commons/LanguageSwitcher";

export const User = () => {
  const [users, setUsers] = useState<any[]>([]);

  const onSubmitForm = (e: any, name: string) => {
    e.preventDefault();

    const body = { name };
    fetch(URL_BASE + "/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return res.json();
        }
      })
      .then((res) => {
        setUsers((prevUsers) => prevUsers.concat(res));
      })
      .catch((reason) =>
        console.error("Create user promise rejected : " + reason)
      );
  };

  const getUsers = () => {
    fetch(URL_BASE + "/users").then((res) => {
      res
        .json()
        .then((res) => {
          setUsers(res);
        })
        .catch((reason) =>
          console.error("All users promise rejected : " + reason)
        );
    });
  };

  useEffect(() => {
    getUsers();
  }, []);
  const { t } = useTranslation();

  return (
    <>
      <div className="container">
        <button
          className="btn btn-primary mt-3"
          onClick={() => (window.location.href = "/connections")}
        >
          {t("connectionLink")}
        </button>
        <LanguageSwitcher></LanguageSwitcher>
        <InputUser onSubmitForm={onSubmitForm} />
        <ListUsers users={users} />
      </div>
    </>
  );
};
