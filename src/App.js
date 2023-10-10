/* eslint-disable react/style-prop-object */
import "./css/App.css";
import Welcome from "./components/welcome";

function App() {
  const Name = ["معاذ", "يحيى", "عبد الرحمن", "مريم", "طنط","الامل"];
  return (
    <div className="App">
      {Name.map((item) => (    
        <Welcome title={item} id={item} />
      ))}
    </div>
  );
}

export default App;
