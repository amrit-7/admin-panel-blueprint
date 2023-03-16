import { SignupButton } from "../../components/buttons/buttons";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import { useState } from "react";
import { useContext } from "react";
import { userContext } from "../../context/user.context";

const defaultFormFields = {
  email: "",
  password: "",
};

const Login = () => {
  const { setCurrentUser } = useContext(userContext);
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    // console.log(formFields);
  };

  const submitHandler = (e) => {
    if (email === "") {
      alert("Enter Email and Password");
    } else {
      const user = { email, password, role: "admin" };
      localStorage.setItem("user", JSON.stringify(user));
      e.preventDefault();
      setCurrentUser(user);
      resetFormFields();
      navigate("/admin");
    }
  };

  return (
    <div>
      <section className="vh-100 main-section">
        <div className="container py-2 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                      alt="login form"
                      className="img-fluid"
                      style={{
                        "border-radius": "1rem 0 0 1rem",
                        height: "100%",
                      }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={submitHandler}>
                        <div className="form d-flex align-items-center mb-3 pb-1">
                          <span className="h1 fw-bold mb-0">Login</span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3">
                          Sign into your account
                        </h5>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example17"
                            name="email"
                            value={email}
                            className="form-control form-control-lg"
                            onChange={changeHandler}
                          />
                          <label className="form-label" for="form2Example17">
                            Email address
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            name="password"
                            id="form2Example27"
                            value={password}
                            className="form-control form-control-lg"
                            onChange={changeHandler}
                          />
                          <label className="form-label" for="form2Example27">
                            Password
                          </label>
                        </div>

                        <div className="pt-1 mb-4">
                          <SignupButton type="submit">Login</SignupButton>
                        </div>

                        {/*<p
                          className="mb-5 pb-lg-2"
                          style={{ color: "#393f81" }}
                        >
                          Don't have an account?
                          <Link to="/signup" style={{ color: "#393f81" }}>
                            Register here
                          </Link>
                          </p>*/}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
