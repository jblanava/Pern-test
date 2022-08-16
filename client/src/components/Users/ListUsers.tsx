import { useTranslation } from "react-i18next";
interface ListUsersProp {
  users: any[];
}

const ListUsers = (props: ListUsersProp) => {
  const { t } = useTranslation();
  return (
    <>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>{t("id")}</th>
            <th>{t("name")}</th>
            <th>{t("connections")}</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user: any) => (
            <tr key={user.usuario_id}>
              <td>{user.usuario_id}</td>
              <td>{user.name}</td>
              <td>
                <button
                  className="btn"
                  onClick={() =>
                    (window.location.href = "/connections/" + user.usuario_id)
                  }
                >
                  {t("personalConnections", { username: user.name })}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListUsers;
