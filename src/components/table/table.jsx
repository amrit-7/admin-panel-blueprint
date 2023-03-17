import Table from "react-bootstrap/Table";
import { useContext } from "react";
import { customersContext } from "../../context/customers.context";
const UserTable = () => {
  const { customers } = useContext(customersContext);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => {
          const { name, id, email, username } = customer;
          return (
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{email}</td>
              <td>{username}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default UserTable;
