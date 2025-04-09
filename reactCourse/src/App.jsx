import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Article from "./components/Article";
import Aside from "./components/Aside";
import "./App.css";

function App() {
  const articles = [
    { id: 1, titre: "Mon premier titre", contenu: "Mon premier contenu" },
    { id: 2, titre: "Mon deuxième titre", contenu: "Mon deuxième contenu" },
    { id: 3, titre: "Mon troisième titre", contenu: "Mon troisième contenu" },
    { id: 4, titre: "Mon quatrième titre", contenu: "Mon quarième contenu" },
  ];
  const maListeArticles = articles.map((article) => {
    return (
      <Article key={article.id} nom={article.titre} content={article.contenu} />
    );
  });
  return (
    <>
      <Header />
      <section>
        <article>{maListeArticles}</article>

        <aside>
          <Aside />
        </aside>
      </section>
    </>
  );
}

export default App;
