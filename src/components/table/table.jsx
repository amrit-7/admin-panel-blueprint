import Table from "react-bootstrap/Table";
import { useContext } from "react";
import { customersContext } from "../../context/customers.context";
import DeleteBtn from "../deletebtn/deletebtn";
const UserTable = () => {
  const { customers } = useContext(customersContext);

  const clickHandler = (id) => {
    console.log(id);
  };
  return (
    <div className="table-responsive">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => {
            const { name, email, username, id } = customer;
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{email}</td>
                <td>{username}</td>
                <td>
                  <DeleteBtn
                    onClick={() => {
                      clickHandler(id);
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default UserTable;
