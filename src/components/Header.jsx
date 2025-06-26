export default function Header (){
    //creando estilos para el componente
    const headerStyle = {
        color:"#edc84b",
        textTransform:"uppercase",
        textAlign: "center",
        fontSize: "4.2rem"

        }
    return (
        <header style={headerStyle}>
            <h1>La pizzeria ch55</h1>
        </header>
    )
}