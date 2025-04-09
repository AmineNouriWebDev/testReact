import "./aside.css";
import MyButton from "./MyButton";
const Aside = () => {
  const boutons = [
    { id: 1, nom: "nom1", img: "https://picsum.photos/200/300" },
    { id: 2, nom: "nom2", img: "https://picsum.photos/200/300" },
    { id: 3, nom: "nom3", img: "https://picsum.photos/200/300" },
  ];
  const maListeBoutons = boutons.map((button) => {
    return (
      <MyButton key={button.id}>
        <p>{button.nom}</p>
        <img src={button.img} alt="Image" />
      </MyButton>
    );
  });
  return <div className="aside">{maListeBoutons}</div>;
};

export default Aside;
