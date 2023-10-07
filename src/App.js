import "./css/App.css";
import Welcome from "../src/js/welcome";

function App() {
  const Name = ["moaz", "yahya", "abdelrahman", "maryam", "dodo"];
  return (
    <div className="App">
      {Name.map((item) => (
        <Welcome title={item} id={item} />
      ))}
    </div>
  );
}

export default App;
