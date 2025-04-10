import { useState } from "react";

const MyButton = () => {
  const [name, setName] = useState("Amine");
  function handleButton() {
    if (name === "Amine") {
      setName("Bilel");
    } else {
      setName("Amine");
    }
  }
  return (
    <div>
      <button onClick={handleButton}>Click me</button>
      <h1>hello {name}</h1>
    </div>
  );
};

export default MyButton;
