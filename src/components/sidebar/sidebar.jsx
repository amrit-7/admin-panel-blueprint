import { Fragment } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import CollapseButton from "../collapseButton/collapseButton";
import { Link } from "react-router-dom";

const Side = () => {
  const { collapseSidebar } = useProSidebar();
  return (
    <Fragment>
      <div style={{ display: "flex", height: "90vh" }}>
        <Sidebar backgroundColor="#F7F7F7">
          <CollapseButton onClick={() => collapseSidebar()}></CollapseButton>
          <Menu className="pb-4">
            <Link to="/admin">
              <MenuItem
                className="pt-2"
                icon={<i className="fa-solid fa-table-columns fa-xl"></i>}
              >
                Dashboard
              </MenuItem>
            </Link>
            <Link to="/admin/users">
              <MenuItem
                className="pt-2"
                icon={<i className="fa-solid fa-users fa-xl"></i>}
              >
                Users
              </MenuItem>
            </Link>
            <Link to="/admin/analytics">
              <MenuItem
                className="pt-2"
                icon={<i className="fa-solid fa-chart-line fa-xl"></i>}
              >
                Analytics
              </MenuItem>
            </Link>
            <Link to="/admin/settings">
              <MenuItem
                className="pt-2"
                icon={<i className="fa-solid fa-gear fa-xl"></i>}
              >
                Settings
              </MenuItem>
            </Link>
          </Menu>
        </Sidebar>
      </div>
    </Fragment>
  );
};
export default Side;
