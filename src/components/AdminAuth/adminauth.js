import { Fragment } from "react";
import Forbidden from "../../routes/forbidden/forbidden";
import { USER_ROLES } from "../../roles";
import { useContext } from "react";
import { userContext } from "../../context/user.context";

export const Admin = ({ children }) => {
  const { currentUser } = useContext(userContext);
  console.log(currentUser);

  if (currentUser.role === USER_ROLES.ADMIN) {
    return <Fragment>{children}</Fragment>;
  } else {
    return <Forbidden />;
  }
};
