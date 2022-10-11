import React from "react";
import "./App.css";
import Postgress from "./components/Postgress";
function App() {
  const [theme, setTheme] = React.useState("sql");
  const arrayOfTopics = [{ name: "sql", content: <Postgress /> }];

  const content = arrayOfTopics.reduce((prev, current) => {
    if (current.name == theme) {
      return [...prev, current.content];
    }
    return prev;
  }, [] as JSX.Element[]);
  return (
    <div className="App">
      <menu id="menu">
        {" "}
        <span>MENU:</span>{" "}
        <div onClick={() => setTheme("sql")}>PostgresSQL</div>
        <div onClick={() => setTheme("mongo")}>mongoDb</div>
        <div>JS Functions</div>
      </menu>{" "}
      {content}
    </div>
  );
}

export default App;
