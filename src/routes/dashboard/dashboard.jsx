import { useState } from "react";
import { Alert, Breadcrumb } from "react-bootstrap";
import CardList from "../../components/cardList/cardList";
import "./dashboard.scss";
const Dashboard = () => {
  const AlertDismissible = () => {
    const [show, setShow] = useState(true);

    if (show) {
      return (
        <Alert variant="success" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Welcome to the Admin Panel!!</Alert.Heading>
        </Alert>
      );
    }
  };
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="/admin">Admin</Breadcrumb.Item>
        <Breadcrumb.Item href="/admin">Dashboard</Breadcrumb.Item>
      </Breadcrumb>
      <h1>Dashboard</h1>
      <AlertDismissible />
      <CardList />
    </div>
  );
};
export default Dashboard;
