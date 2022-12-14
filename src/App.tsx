import React from "react";
import "./App.css";
import HTML from "./components/html/HTMLCommands";
import Postgress from "./components/sql/Postgress";
import JSFunctions from "./components/jsfunctions/JSFunctions";
import MongoCommands from "./components/mongoDB/MongoCommands";
import ReactComps from "./components/reactComps/ReactComps";
import GitCommands from "./components/git/GitCommands";
import CliCommands from "./components/cli/CliCommands";
import RegEx from "./components/regex/Regex";
import Sass from "./components/sass/SassCommands";
import TSConcepts from "./components/typeScript/TSConcepts";
import Btstrp from "./components/bootstrap/BtstrpCommands";
import GqlCommands from "./components/graphQL/GqlCommands";
import QstCommands from "./components/questions/QstCommands";
import TlwCommands from "./components/tailwind/TlwCommands";
import TH from "./components/theory/TH";
function App() {
  const [theme, setTheme] = React.useState("sql");
  const arrayOfTopics = [
    { name: "html", content: <HTML /> },
    { name: "sql", content: <Postgress /> },
    { name: "js", content: <JSFunctions /> },
    { name: "ts", content: <TSConcepts /> },
    { name: "mongo", content: <MongoCommands /> },
    { name: "react", content: <ReactComps /> },
    { name: "git", content: <GitCommands /> },
    { name: "cli", content: <CliCommands /> },
    { name: "regex", content: <RegEx /> },
    { name: "sass", content: <Sass /> },
    { name: "btstrp", content: <Btstrp /> },
    { name: "gql", content: <GqlCommands /> },
    { name: "qst", content: <QstCommands /> },
    { name: "tlw", content: <TlwCommands /> },
    { name: "th", content: <TH /> },
  ];

  const content = arrayOfTopics.reduce((prev, current) => {
    if (current.name === theme) {
      return [...prev, current.content];
    }
    return prev;
  }, [] as JSX.Element[]);
  return (
    <div className="App">
      <menu id="menu">
        {" "}
        <span>MENU:</span> <div onClick={() => setTheme("html")}>HTML</div>
        <div onClick={() => setTheme("sql")}>PostgresSQL</div>
        <div onClick={() => setTheme("mongo")}>mongoDB</div>
        <div onClick={() => setTheme("js")}>JavaScript</div>
        <div onClick={() => setTheme("ts")}>TypeScript</div>
        <div onClick={() => setTheme("react")}>React</div>
        <div onClick={() => setTheme("th")}>ReactTh</div>
        <div onClick={() => setTheme("git")}>Git</div>
        <div onClick={() => setTheme("cli")}>CLI</div>
        <div onClick={() => setTheme("regex")}>RegEx</div>
        <div onClick={() => setTheme("sass")}>Sass</div>
        <div onClick={() => setTheme("tlw")}>Tailwind</div>
        <div onClick={() => setTheme("btstrp")}>Bootstrap</div>
        <div onClick={() => setTheme("gql")}>GraphQL</div>
        <div onClick={() => setTheme("qst")}>Theory</div>
      </menu>{" "}
      {content}
    </div>
  );
}

export default App;
