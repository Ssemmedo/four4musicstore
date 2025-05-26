import "./css/App.css";
import Header from "./components/Header";
import Products from "./layouts/Products";
import Contact from "./layouts/Contact";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <div className="home-initial">
        <a href="/buy/{id}">Comprar agora</a>
      </div>

      <Products />
      <Contact/>
    </div>
  );
}

export default App;
