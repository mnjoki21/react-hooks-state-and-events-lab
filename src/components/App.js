import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {
  const [items , setItems] = useState (itemData)
  const [darkMode , setDarkMode] =useState(false)

  function handleDarkMode (){
    setDarkMode((darkMode)=> !darkMode)
  }

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = false ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode} >Mode{darkMode ? "Dark" : "light"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
