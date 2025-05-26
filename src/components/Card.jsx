import '../css/Card.css';

function Card(props){
    return(
        <div className="card">
            <div className="card-image">
                <img src= {props.img} alt={props.desc} />
            </div>
            <div className="card-details">
                <p className="card-description">{props.desc}</p>
                <p className="card-label">Preço:</p>
                <p className="card-price">{props.preco}</p>
            </div>
        </div>
    )
}

export default Card;