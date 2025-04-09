import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Article from "./components/Article";
import Aside from "./components/Aside";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <section>
        <article>
          <Article
            nom="Academie Tarmeez"
            content="Academie pour apprendre le développsement"
          />
          <Article />
          <Article />
          <Article />
        </article>

        <aside>
          <Aside />
        </aside>
      </section>
    </>
  );
}

export default App;
