import { useState } from "react";

function Login({ title, onclick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmitEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmitPassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="Login">
      <form action="/Chats.js" className="Login">
        <button>Try on</button>
        <div className="box-Login">
          <h1>login</h1>
          <input
            defaultValue={email}
            placeholder="Email"
            type="email"
            required
            onChange={handleSubmitEmail}
          />
          <br />
          <input
            defaultValue={password}
            placeholder="Password"
            type="password"
            required
            onChange={handleSubmitPassword}
          />
          <br />
          <input type="submit" defaultValue="Login"></input>
          <div>
            {email}
            <br />
            {password}
          </div>
        </div>
      </form>
    </div>
  );
}
export default Login;
