import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card.js";
import CatStore from "./stores/cats.store";
import { getRandomInt } from "./utils/math.utils";

function App() {
  const [cat, setCat] = useState(CatStore[26]);

  function getRandomCat() {
    const idx = getRandomInt(CatStore.length - 1);
    setCat(CatStore[idx]);
  }

  return (
    <div className="App">
      <Card
        breed={cat.name}
        image={cat.image}
        description={cat.description}
        click={getRandomCat}
      />
    </div>
  );
}

export default App;
