function Card(props){
    return(
        <div>
            <div>
                <img src= {props.img} alt={props.desc} />
            </div>
            <div>
                <p>{props.desc}</p>
                <p>Preço:</p>
                <p>{props.preco}</p>
            </div>
        </div>
    )
}

export default Card;