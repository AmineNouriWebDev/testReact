import "./aside.css";
import MyButton from "./MyButton";
const Aside = () => {
  return (
    <div className="aside">
      <MyButton>
        <p>nom</p>
        <img src="https://picsum.photos/200/300" alt="Image" />
      </MyButton>
      <MyButton>
        <a href="#">click me</a>
      </MyButton>
      <MyButton>
        <p>nom</p>
        <img src="https://picsum.photos/200/300" alt="Image" />
      </MyButton>
    </div>
  );
};

export default Aside;
