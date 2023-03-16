import "./index.css";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Dashboard from "./routes/dashboard/dashboard";
import Users from "./routes/users/users";
import Login from "./routes/login/login";
import Signup from "./routes/signup/signup";
import Home from "./routes/home/home";
import Notfound from "./routes/notfound/notfound";
import { Admin } from "./components/AdminAuth/adminauth";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/admin"
          element={
            <Admin>
              <Layout />
            </Admin>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="/admin/users" element={<Users />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
