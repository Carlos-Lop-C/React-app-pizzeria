
export default function Card() {

    const cardStyle = {
        border: "1px solid black",
        borderRadius: "8px",
        padding: "20px",
        width: "300px",
        backgroundColor: "beige",
        fontFamily: "cursive"
    }

    const buttonStyle = {
        backgroundColor: "#edc84b",
        color:"black",
        cursor: "pointer",
        border: "solid black 1px"
    }

    const imgStyle = {
        width:"300px",
        borderRadius: "8px",
        border:"solid grey 3px"
    }

    return (
        <div style={cardStyle}>
            <img src="/imagenes/pizza.jpeg" alt="Pizza" style={imgStyle}/>
            <h2>Carlos Lopez</h2>
            <p>Ejercicio de React</p>
            <a href="https://github.com/Carlos-Lop-C"><button style={buttonStyle}>Github</button></a>
            <br /> <br />
            <a href="https://github.com/Carlos-Lop-C"><button style={buttonStyle}>LinkedIn</button></a>
        </div>
    );
}