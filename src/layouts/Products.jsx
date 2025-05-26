import Card from "../components/Card";
import '../css/Products.css';

function Products() {
    return(
        <div className="products" id="produtos">
            <h1>Produtos</h1>
            <div className="cards-container container">
                <Card
                    desc="T-shirt preta Cesf"
                    img=".\imgs\cesf-shirt-black.png"
                    preco="3.000 CVE"
                />
                <Card
                    desc="T-shirt preta Cesf"
                    img=".\imgs\cesf-shirt-black.png"
                    preco="3.000 CVE"
                />
                <Card
                    desc="T-shirt preta Cesf"
                    img=".\imgs\cesf-shirt-black.png"
                    preco="3.000 CVE"
                />
                <Card
                    desc="T-shirt preta Cesf"
                    img=".\imgs\cesf-shirt-black.png"
                    preco="3.000 CVE"
                />
            </div>
      </div>
    )
}

export default Products;