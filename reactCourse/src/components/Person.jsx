import React from "react";

const Person = ({
  nom,
  email,
  age,
  content = "not found",
  children = "pas de child",
}) => {
  return (
    <div
      style={{
        width: "500px",

        backgroundColor: "lightblue",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        margin: "20px",
      }}>
      Information:
      <ul>
        <li>Nom: {nom || "undefined"}</li>
        <li>Email:{email || "undefined"} </li>
        <li>Age:{age || "undefined"}</li>
        <hr />
        <p>content:{content}</p>
      </ul>
      {children}
    </div>
  );
};

export default Person;
