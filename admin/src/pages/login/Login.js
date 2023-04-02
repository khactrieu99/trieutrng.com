import { doLogin } from "api/Auth";
import useAuth from "hooks/useAuth";
import { useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();
  const {authenticated, sessionExists} = useAuth();

  useEffect(() => {
    if (sessionExists()) {
      navigate("/article");
    } else {
      navigate("/login");
    }
  }, [props.loggedIn])

  const login = (event) => {
    event.preventDefault();
    let username = event.target.username.value;
    let password = event.target.password.value;
    props.login({username, password})
  }

  return (
    <>
      <div className="log-form">
        <h2>Login to your account</h2>
        <form onSubmit={login}>
          <input type="text" title="username" placeholder="username" name="username"/>
          <input type="password" title="username" placeholder="password" name="password"/>
          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    </>
  )
}

export default Login;