import { Breadcrumb } from "react-bootstrap";

const Users = () => {
  return (
    <div className="content">
      <Breadcrumb>
        <Breadcrumb.Item href="/admin">Admin</Breadcrumb.Item>
        <Breadcrumb.Item href="/admin/users">Users</Breadcrumb.Item>
      </Breadcrumb>
      <h1> Users </h1>
    </div>
  );
};
export default Users;
