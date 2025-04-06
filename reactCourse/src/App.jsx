import "bootstrap/dist/css/bootstrap.min.css";
import MyButton from "./components/MyButton";
const person = {
  name: "amine",
  age: 25,
  job: "developer",
};
function App() {
  const elmStyle = {
    color: "red",
    backgroundColor: "yellow",
    fontSize: "30px",
    textAlign: "center",
    padding: "20px 0px",
  };
  return (
    <>
      <h1 style={elmStyle}>
        Hello {person.name} you are {person.job} your age is: {person.age}
      </h1>
      <MyButton />
    </>
  );
}

export default App;
