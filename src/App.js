import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <ul>
          <li>
            <a href="#hacker">
              <strong>Hacker News </strong>
            </a>
          </li>

          <li>
            <a href="#home">new</a>
          </li>
          <li>
            <a href="#news">past</a>
          </li>
          <li>
            <a href="#contact">comments</a>
          </li>
          <li>
            <a href="#about">ask</a>
          </li>
          <li>
            <a href="#news">jobs</a>
          </li>
          <li>
            <a href="#contact">show</a>
          </li>
          <li>
            <a href="#about">submit</a>
          </li>
          <div className="login">
            <a href="#login">login</a>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default App;
