import logo from "./logo.svg";
import "./App.css";

function App() {
  const data = [
    {
      title: "Ethereum activates The Merge as it shifts to proof of stake",
      author: "SomeUser",
      time: "10/28/1997",
      comments: 219,
    },
    {
      title: "LibreRPi – open source replacements for RPi firmware ",
      author: "SomeUser",
      time: "10/28/1997",
      comments: 219,
    },
    {
      title: "Algolia Acquires Search.io",
      author: "SomeUser",
      time: "10/28/1997",
      comments: 219,
    },
  ];

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
      <div className="container">
        <ol>
          {data.map((item) => (
            <li>
              {item.title}
              <table>
                <tr>
                  <td> {item.author} </td> | <td> {item.comments} </td> |
                </tr>
              </table>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
