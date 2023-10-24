/* eslint-disable react/style-prop-object */
import "./css/App.css";
import { useState, useEffect } from "react";
import Login from "./components/Login";
import Chats from "./components/Chats";

function App() {
  const [isLogin, setisLogin] = useState(false);
  return <div className="App">{isLogin ? <Chats /> : <Login />}</div>;
}

export default App;
