import { Breadcrumb } from "react-bootstrap";
import UserTable from "../../components/table/table";

const Users = () => {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="/admin">Admin</Breadcrumb.Item>
        <Breadcrumb.Item href="/admin/users">Users</Breadcrumb.Item>
      </Breadcrumb>
      <h1> Users </h1>
      <UserTable />
    </div>
  );
};
export default Users;
