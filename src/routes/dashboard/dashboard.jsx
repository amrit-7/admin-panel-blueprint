import { Breadcrumb } from "react-bootstrap";
import "./dashboard.scss";
const Dashboard = () => {
  return (
    <div className="content">
      <Breadcrumb>
        <Breadcrumb.Item href="/admin">Admin</Breadcrumb.Item>
        <Breadcrumb.Item href="/admin">Dashboard</Breadcrumb.Item>
      </Breadcrumb>
      <h1>Dashboard</h1>
    </div>
  );
};
export default Dashboard;
