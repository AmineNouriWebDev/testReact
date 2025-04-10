import "bootstrap/dist/css/bootstrap.min.css";
import MyButton from "./components/MyButton";
import MyInput from "./components/MyInput";

function App() {
  return (
    <>
      <div>
        <MyInput />
      </div>
      <br />
      <br />
      <div>
        <h2>Component</h2>
        <MyButton />
      </div>
    </>
  );
}

export default App;
