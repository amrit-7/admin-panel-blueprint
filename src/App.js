import "./index.css";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Dashboard from "./routes/dashboard/dashboard";
import Users from "./routes/users/users";
import Login from "./routes/login/login";
import Signup from "./routes/signup/signup";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/admin/users" element={<Users />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
