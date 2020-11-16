import React, { useContext, useState } from "react";
import "./Login.css";
import { useHistory, useLocation } from "react-router-dom";
import Google from "./../../images/Group 573.png";
import Facebook from "./../../images/Group 2.png";
import { AllContext } from "../../App";
import firebase from "firebase/app";

const Login = () => {
  const [loggedIn, setLoggedIn, name, setName] = useContext(AllContext);

  const location = useLocation().location?.pathname;

  const history = useHistory();

  const handleForm = (event) => {
    event.preventDefault();
  };

  const [errorConfirmation, setErrorConfirmation] = useState(false);

  const [isSignedUp, setSignedUp] = useState(false);

  const [user, setUser] = useState({});

  const [userSubmit, setUserSubmit] = useState("");

  if (userSubmit === "signUp") {
    user.password === user.confirmationPassword
      ? firebase
          .auth()
          .createUserWithEmailAndPassword(user.email, user.password)
          .then((result) => {
            setErrorConfirmation(false);
            setUser({ ...user, signUpError: "" });
            setSignedUp(true);

            const currentUser = firebase.auth().currentUser;
            currentUser.updateProfile({
              displayName: `${user.fname} ${user.lname}`,
            });
          })
          .catch((error) => {
            setUser({ ...user, signUpError: error.message });
          })
      : setErrorConfirmation(true);
  }

  userSubmit === "signIn" &&
    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((result) => {
        const currentUser = firebase.auth().currentUser;
        setName(currentUser.displayName);
        setLoggedIn(true);
        history.replace(location || "/");
      })
      .catch((error) => {
        setUser({ ...user, signInError: error.message });
      });

  const facebookSignInHandler = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const currentUser = firebase.auth().currentUser;
        setName(currentUser.displayName);
        setLoggedIn(true);
        history.replace(location || "/");
      })
      .catch((error) => {
        setUser({ ...user, signInError: error.message });
      });
  };

  const googleSignInHandler = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const currentUser = firebase.auth().currentUser;
        setName(currentUser.displayName);
        setLoggedIn(true);
        history.replace(location || "/");
      })
      .catch((error) => {
        setUser({ ...user, signInError: error.message });
      });
  };

  const loginToggleHandler = () => {
    setSignedUp(true);
    setErrorConfirmation(false);
    setUser({ ...user, signupError: "" });
  };

  const signupToggleHandler = () => {
    setSignedUp(false);
    setUser({ ...user, signInError: "" });
  };

  return (
    <div>
      <form onSubmit={handleForm} className="form-group login-form-group">
        <div className="form-group">
          {isSignedUp ? (
            <h5 className="font-weight-bolder">Login</h5>
          ) : (
            <h5 className="font-weight-bolder">Create an account</h5>
          )}

          {!isSignedUp && (
            <div className="pt-3">
              <input
                className="form-control"
                style={{ border: "none", borderBottom: "1px solid" }}
                onBlur={(event) =>
                  setUser({ ...user, fname: event.target.value })
                }
                type="text"
                placeholder="First name"
                required
              />
              <input
                className="pt-2 form-control"
                style={{ border: "none", borderBottom: "1px solid" }}
                onBlur={(event) =>
                  setUser({ ...user, lname: event.target.value })
                }
                type="text"
                placeholder="Last name"
                required
              />
            </div>
          )}

          <input
            className="pt-2 form-control"
            style={{ border: "none", borderBottom: "1px solid" }}
            onBlur={(event) => setUser({ ...user, email: event.target.value })}
            type="email"
            placeholder="Username or Email"
            required
          />

          <input
            className="pt-2 form-control"
            style={{ border: "none", borderBottom: "1px solid" }}
            onBlur={(event) =>
              setUser({ ...user, password: event.target.value })
            }
            type="password"
            placeholder="Password"
            required
          />
          {!isSignedUp && (
            <input
              className="pt-2 form-control"
              style={{ border: "none", borderBottom: "1px solid" }}
              onBlur={(event) =>
                setUser({ ...user, confirmationPassword: event.target.value })
              }
              type="password"
              placeholder="Confirm Password"
              required
            />
          )}

          {isSignedUp && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "13px",
                fontWeight: "500",
              }}
            >
              <div className="d-flex align-items-center ml-5">
                <input id="checkbox" type="Checkbox" />
                <label className="mt-2 ml-1" for="checkbox">
                  Remember me
                </label>
              </div>
              <p
                className="mr-5 mt-3 font-weight-bold"
                style={{
                  borderBottom: "1px solid #275A53",
                  cursor: "pointer",
                  color: "#275A53",
                }}
              >
                Forgot Password
              </p>
            </div>
          )}

          {user.signInError ? (
            <small className="text-danger">{user.signInError}</small>
          ) : (
            ""
          )}
          {user.signupError ? (
            <small className="text-danger">{user.signUpError}</small>
          ) : (
            ""
          )}
          {errorConfirmation ? (
            <small className="text-danger"> Wrong Password</small>
          ) : (
            ""
          )}
          {isSignedUp ? (
            <input
              className="btn btn-block text-white"
              style={{ backgroundColor: "#275A53" }}
              name="SignIn"
              type="submit"
              value="Login"
              onClick={(event) => setUserSubmit(event.target.name)}
            />
          ) : (
            <input
              className="btn btn-block text-white mt-3"
              style={{ backgroundColor: "#275A53" }}
              name="SignUp"
              type="submit"
              value="Create an account"
              onClick={(event) => setUserSubmit(event.target.name)}
            />
          )}
        </div>
        {isSignedUp ? (
          <>
            <span>Don't have an account? </span>
            <span
              onClick={signupToggleHandler}
              className="font-weight-bold"
              style={{
                borderBottom: "1px solid #275A53",
                cursor: "pointer",
                color: "#275A53",
              }}
            >
              Create an account
            </span>
          </>
        ) : (
          <>
            <span>Already have an account? </span>
            <span
              onClick={loginToggleHandler}
              className="font-weight-bold"
              style={{
                borderBottom: "1px solid #275A53",
                cursor: "pointer",
                color: "#275A53",
              }}
            >
              Login
            </span>
          </>
        )}
      </form>

      <div style={{ width: "300px", margin: "auto" }}>
        <p className="text-center">Or</p>

        <div
          onClick={googleSignInHandler}
          style={{ cursor: "pointer", borderRadius: "50px" }}
          className="d-flex border ml-2"
        >
          <img
            className="mt-2 ml-1"
            style={{ width: "30px", height: "30px" }}
            src={Google}
            alt=""
          />
          <p className="ml-4 mt-2">Continue with Google</p>
        </div>
        <div
          onClick={facebookSignInHandler}
          style={{ cursor: "pointer", borderRadius: "50px" }}
          className="d-flex border ml-2 mt-3"
        >
          <img
            className="mt-2 ml-1"
            style={{ width: "30px", height: "30px" }}
            src={Facebook}
            alt=""
          />
          <p className="ml-4 mt-2">Continue with Facebook</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
