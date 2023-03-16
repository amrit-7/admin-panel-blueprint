import { Fragment } from "react";
import Forbidden from "../../routes/forbidden/forbidden";
import { USER_ROLES } from "../../roles";
import { useContext } from "react";
import { userContext } from "../../context/user.context";

export const Admin = ({ children }) => {
  const { currentUser } = useContext(userContext);
  console.log(currentUser);
  const user = JSON.parse(localStorage.getItem("user"));

  if (user.role === USER_ROLES.ADMIN) {
    return <Fragment>{children}</Fragment>;
  } else {
    return <Forbidden />;
  }
};
