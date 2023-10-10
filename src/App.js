/* eslint-disable react/style-prop-object */
import "./css/App.css";
import Welcome from "./components/welcome";

function App() {
  const Name = ["moaz", "yahya", "abdelrahman", "maryam", "dodo","عمتو عبير"];
  return (
    <div className="App">
      {Name.map((item) => (    
        <Welcome title={item} id={item} />
      ))}
    </div>
  );
}

export default App;
