import style from './Styles/pizza-style.module.css'
export default function Pizza({ pizzaObject }) {

    return (
        //Usando operador ternario para hacer una clase condicional
        <li className={`${style.pizza} ${pizzaObject.soldOut ? style["sold-out"] : ""}`}>
            <img src={pizzaObject.photoName} alt={pizzaObject.name} />
            <div>
                <h3>{pizzaObject.name}</h3>
                <p>{pizzaObject.ingredients}</p>
                <p>{pizzaObject.price}</p>
                <button>Delete pizza</button>
            </div>
        </li>
    )
}