import logo from './logo.svg';
import './css/App.css';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div className='home-initial'>
        <a href='/buy/{id}' >Comprar agora</a>
      </div>
      <div className='products'>
        <h1>Produtos</h1>
        <Card 
          desc='T-shirt preta Cesf'
          img = '.\imgs\cesf-shirt-black.png'
          preco = '3.000 CVE'/>

      </div>
    </div>
  );
}

export default App;
