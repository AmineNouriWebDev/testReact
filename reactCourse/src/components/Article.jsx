import "./article.css";

const Aricle = ({ nom = "unnamed", content = "empty" }) => {
  return (
    <div className="article">
      <h1>{nom}</h1>
      <hr></hr>
      <p>{content}</p>
    </div>
  );
};

export default Aricle;
