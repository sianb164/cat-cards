import React from "react";
import "./App.css";
import Card from "./components/Card.js";
import CatStore from "./stores/cats.store";
import { getRandomInt } from "./utils/math.utils";

function App() {
  const idx = getRandomInt(CatStore.length - 1);
  const cat = CatStore[idx];

  return (
    <div className="App">
      <Card breed={cat.name} image={cat.image} description={cat.description} />
    </div>
  );
}

export default App;
