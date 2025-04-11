import { useState } from "react";

const MyInput = () => {
  //   const [inputValue, setInputValue] = useState("");

  //   const [emailValue, setEmailValue] = useState("");
  const [inputsValue, setInputsValue] = useState({
    name: "",
    email: "",
    age: "",
    generalInfo: "",
    isMajor: false,
    country: "",
    status: "",
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
        <br />
        <hr></hr>
        <label>Country</label> <br></br>
        <select
          value={inputsValue.country}
          name="country"
          onChange={(e) =>
            setInputsValue({ ...inputsValue, country: e.target.value })
          }>
          <option value="">Select a country</option>
          <option>Tunisia</option>
          <option>Egypt</option>
          <option>Japon</option>
        </select>
        <hr></hr>
        <div>
          <input
            value="teacher"
            type="radio"
            name="teacher"
            id="teacher"
            checked={inputsValue.status == "teacher"}
            onChange={(e) =>
              setInputsValue({ ...inputsValue, status: e.target.value })
            }
          />
          Teacher
          <input
            value="student"
            type="radio"
            name="student"
            id="student"
            checked={inputsValue.status == "student"}
            onChange={(e) =>
              setInputsValue({ ...inputsValue, status: e.target.value })
            }
          />
          Student
        </div>
        <hr></hr>
        <br />
        <label htmlFor="generalInfo"></label>
        <textarea
          value={inputsValue.generalInfo}
          name="generalInfo"
          id="generalInfo"
          onChange={(e) =>
            setInputsValue({ ...inputsValue, generalInfo: e.target.value })
          }
        />
        <br />
        <label htmlFor="major">is Major?</label>
        <input
          type="checkbox"
          name="major"
          id="major"
          onChange={(e) =>
            setInputsValue({ ...inputsValue, isMajor: e.target.checked })
          }
          checked={inputsValue.isMajor}
        />
        <hr />
        <button type="submit">send</button>
      </form>
    </div>
  );
};

export default MyInput;
