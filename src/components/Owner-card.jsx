import style from './Styles/OwnerCard-styles.module.css'

export default function OwnerCard() {

    return (
        <div>
            <img src="/imagenes/Portada.jpeg" alt="Owner img" className={`${style["portada"]}`} />
            <h2>Carlos Lopez</h2>
            <p>Desarrollador web junior con formación en desarrollo
                fullstack por Generation México, colaborativo en los trabajos en equipo,
                capaz de aportar ideas para el correcto desarrollo de los proyectos
                incluyendo
                buena escucha activa contando con experiencia en trabajos conjuntos.</p>
            <a href="https://github.com/Carlos-Lop-C"><button>Github</button></a>
            
            <a href="https://github.com/Carlos-Lop-C"><button>LinkedIn</button></a>
        </div>
    );
}