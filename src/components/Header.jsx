import logo from "../logo.svg";
import "../css/header.css"

function Header() {
  return (
    <div className="header">
      <div className="App-logo">
        <a href="/">
          <img src={logo} alt="Four4 Music Store"/>
        </a>
      </div>
      <div className="header-options">
        <ul>
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#produtos">Produtos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;