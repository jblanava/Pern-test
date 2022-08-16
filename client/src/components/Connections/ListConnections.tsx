import { useTranslation } from "react-i18next";

interface ListProps {
  list: any[];
}

export const ListConnections = (props: ListProps) => {
  const { t } = useTranslation();
  return (
    <>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>{t("user.id", { number: 1 })}</th>
            <th>{t("user.name", { number: 1 })}</th>
            <th>{t("user.name", { number: 2 })}</th>
            <th>{t("user.id", { number: 2 })}</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((connection: any) => (
            <tr key={`${connection.user1_id}  ${connection.user2_id}`}>
              <td>{connection.user1_id}</td>
              <td>{connection.user1_name}</td>
              <td>{connection.user2_name}</td>
              <td>{connection.user2_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListConnections;
