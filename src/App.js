import React, { useState } from "react";
import "./App.css";

const variants = [
  {
    color: "green",
    name: "Green",
    src: "green.jpg",
  },
  {
    color: "yellow",
    name: "Yellow",
    src: "yellow.jpg",
  },
  {
    color: "red",
    name: "Red",
    src: "red.jpg",
  },
];

function App() {
  const [selected, setSelected] = useState(variants[0]);

  return (
    <>
      {console.log("selected", selected)}
      <div className="flex-container">
        <div className="images">
          <img src={`${selected.src}`} width="300"></img>
        </div>
        <div className="phone">
          <div className="color-button">
            <h2 className="phone-name">Apple Iphone 11</h2>
            {variants.map((item, index) => (
              <>
                {console.log("item", item)}
                <button
                  className={item.color}
                  style={{
                    backgroundColor: selected == item ? item.color : "white",
                  }}
                  onClick={() => setSelected(variants[index])}
                >
                  {item.name}
                </button>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
