import Pizza from './pizzas'
import {useState, useEffect} from "react";
export default function Menu() {
    const [Pizzas, setPizzas]= useState(
        [
            {
                name: "Focaccia",
                ingredients: "Bread with italian olive oil and rosemary",
                price: 6,
                photoName: "pizzas/focaccia.jpg",
                soldOut: false,
            },
            {
                name: "Pizza Margherita",
                ingredients: "Tomato and mozarella",
                price: 10,
                photoName: "pizzas/margherita.jpg",
                soldOut: false,
            },
            {
                name: "Pizza Spinaci",
                ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
                price: 12,
                photoName: "pizzas/spinaci.jpg",
                soldOut: false,
            },
            {
                name: "Pizza Funghi",
                ingredients: "Tomato, mozarella, mushrooms, and onion",
                price: 12,
                photoName: "pizzas/funghi.jpg",
                soldOut: false,
            },
            {
                name: "Pizza Salamino",
                ingredients: "Tomato, mozarella, and pepperoni",
                price: 15,
                photoName: "pizzas/salamino.jpg",
                soldOut: true,
            },
            {
                name: "Pizza Prosciutto",
                ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
                price: 18,
                photoName: "pizzas/prosciutto.jpg",
                soldOut: false,
            },
        ])


    useEffect(()=>{
        const data = localStorage.getItem("Pizzas")
        if (data) setPizzas(JSON.parse(data))
    },[])
useEffect(()=> localStorage.setItem ("Pizzas", JSON.stringify(Pizzas)),[Pizzas]);


    //const deletePizza = (pizzaName) => setPizzas (prev => prev.filter((pizza) => pizza.name===pizzaName));
    
    
    return (
        <main className="menu">
            <h2>Our menu:</h2>
            {Pizzas.length > 0 ?
                (<>
                    <p>Authentic italian cousine. 6 creative dishes to choose from. All from our stone oven, all organic all delicious.</p>
                    <ul className="pizzas">
                        {Pizzas.map((pizza) => {

                            return (
                                <Pizza pizzaObject={pizza} key={pizza.name} />
                            )
                        })}
                    </ul>
                </>) : (
                    <p>We are still working on our menu, please come back later.</p>
                )}

        </main>
    )
}