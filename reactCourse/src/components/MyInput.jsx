import { useState } from "react";

const MyInput = () => {
  //   const [inputValue, setInputValue] = useState("");

  //   const [emailValue, setEmailValue] = useState("");
  const [inputsValue, setInputsValue] = useState({
    name: "",
    email: "",
    age: "",
  });

  return (
    <div className="text-center border border-2 border-primary rounded p-3 w-50 m-auto">
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="name">Your Name</label>
        <br></br>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) =>
            setInputsValue({ ...inputsValue, name: e.target.value })
          }
          value={inputsValue.name}
        />
        <br></br>
        <label htmlFor="email">Your Email</label>
        <br></br>
        <input
          type="text"
          name="email"
          id="email"
          onChange={(e) =>
            setInputsValue({ ...inputsValue, email: e.target.value })
          }
          value={inputsValue.email}
        />
        <br></br>
        <label htmlFor="age">Age</label>
        <br></br>
        <input
          type="text"
          name="age"
          id="age"
          onChange={(e) =>
            setInputsValue({ ...inputsValue, age: e.target.value })
          }
          value={inputsValue.age}
        />
        <hr />
        <button type="submit">send</button>
      </form>
    </div>
  );
};

export default MyInput;
