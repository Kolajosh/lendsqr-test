import React, { useState, FormEvent } from "react";
import "./styles/Login.scss";
import { useFormik } from "formik";
import { loginValidationSchema } from "../utils/Validations/login.validation";

function Login() {
  const [showPass, setShowPass] = useState(false);

  // for form state management and validations
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      console.log(values);
      window.location.assign("/users");
    },

    validationSchema: loginValidationSchema,
  });

  const { handleBlur, handleChange, handleSubmit, errors, isValid, dirty } =
    formik;

  // function to reveal password
  const RevealPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  return (
    <>
      <div className="brand">
        <img src="https://i.postimg.cc/tCW5Cmry/image.png" alt="Logo" />
      </div>
      <div className="loginPage">
        <div className="illustration">
          <img
            src="https://i.postimg.cc/tCW5Cmry/image.png"
            alt="Logo"
            className="logo"
          />
          <img
            src="https://i.postimg.cc/prnmC49d/image.png"
            alt="Illustration"
            className="board"
          />
        </div>
        <div className="form">
          <div>
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span>{errors?.email}</span>
              </div>
              <div className="form-field">
                <input
                  name="password"
                  type={showPass ? "text" : "password"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Password"
                />
                <span>{errors?.password}</span>
                <button className="show_btn" onClick={RevealPassword}>
                  Show
                </button>
              </div>

              <a href="/">FORGOT PASSWORD?</a>
              <button
                disabled={!(isValid && dirty)}
                type="submit"
                className="login_btn"
              >
                LOG IN
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
