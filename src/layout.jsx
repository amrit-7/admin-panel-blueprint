import "./layout.scss";
import { Outlet } from "react-router-dom";
import Topbar from "./components/navbar/navbar";
import Side from "./components/sidebar/sidebar";
import { Fragment } from "react";

const Layout = () => {
  return (
    <Fragment>
      <Topbar />
      <div classname="header"></div>
      <div className="sidebar">
        <Side />
      </div>
      <div className="main-content">
        <Outlet />
      </div>
    </Fragment>
  );
};
export default Layout;
