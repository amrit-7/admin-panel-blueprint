import { useEffect, useState } from "react";
import Cards from "../card/card";
import "./cardlist.scss";
import { useContext } from "react";
import { customersContext } from "../../context/customers.context";
const CardList = () => {
  const [users, setUsers] = useState([]);
  const { setCustomers } = useContext(customersContext);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((userData) => setUsers(userData));
  }, [users]);
  setCustomers(users);
  return (
    <div className="card-list">
      {users.map((user) => {
        return <Cards key={user.id} user={user} />;
      })}
    </div>
  );
};
export default CardList;
