import { useState } from "react";

function Login({ title }) {
  const [IsValue, setIsValue] = useState("");
  const onChange = (e) => {
    setIsValue(e.target.value);
  };
  const clearValueInput = (e) => {
    e.target.d = "";
  }
  return (
    <div className="Login">
      <div className="box-Login">
        <h1>login</h1>
        <input defaultValue={IsValue} placeholder="Email" d onChange={onChange} />
      </div>
    </div>
  );
}
export default Login;
