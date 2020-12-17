import React, { useState } from "react";
import "./styles.css";

const dictionary = {
  "🐕": "Dog",
  "🐈": "Cat",
  "🐀": "Mouse",
  "🐅": "Tiger",
  "🐼": "Panda",
  "🐒": "Monkey",
  "🦍": "Gorilla",
  "🦧": "Orangutan",
  "🐺": "Wolf",
  "🦊": "Fox",
  "🦝": "Raccoon",
  "🦁": "Lion",
  "🐎": "Horse",
  "🐖": "Pig",
  "🦒": "Giraffe",
  "🐨": "Koala",
  "🐐": "Goat",
  "": ""
};

var data = Object.keys(dictionary);

export default function App() {
  const [output, setoutput] = useState("");

  function inputHandler(event) {
    // processing
    var input = event.target.value;

    var output = dictionary[input];

    if (output === undefined) {
      output = "we don't have this in our database 😰";
    }
    setoutput(output); // react call to show output
  }

  function emojiClick(icon) {
    // processing
    var output = dictionary[icon];
    setoutput(output); // react call to show output
  }
  return (
    <div className="App">
      <h1>
        {" "}
        <span style={{ fontSize: "7rem" }}>🧐</span>
      </h1>
      <h1>Know your Animals!!</h1>

      <input onChange={inputHandler} />

      <h2>
        <span
          style={{
            fontWeight: "bolder",
            fontSize: "larger",
            background: "#145A32",
            padding: "1rem 4rem",
            borderRadius: "0.5rem"
          }}
        >
          {output}
        </span>{" "}
      </h2>
      {/* Actual output set by React using useState */}
      <h3> Emojis we know! </h3>
      <p>Enjoy and click to see the which emoji represents which animal!</p>
      {data.map(function (icon) {
        return (
          <span
            onClick={() => emojiClick(icon)}
            style={{
              fontSize: "3rem",
              padding: "0.5rem",
              cursor: "pointer"
            }}
            key={icon}
          >
            {icon}
          </span>
        );
      })}
    </div>
  );
}
