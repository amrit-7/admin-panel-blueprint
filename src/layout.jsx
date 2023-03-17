import "./layout.scss";
import { Outlet } from "react-router-dom";
import Topbar from "./components/navbar/navbar";
import Side from "./components/sidebar/sidebar";
import { Fragment } from "react";

const Layout = () => {
  return (
    <Fragment>
      <Topbar />
      <div className="parent">
        <Side className="sidebar" />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
};
export default Layout;
