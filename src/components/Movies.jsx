import style from "./Styles/OwnerMovies-styles.module.css";

export default function Movies({ movieObject }) {
    return (
        <li
            className={movieObject.notsequel ? style.notsequel : style.moviecard}>

            <img src={movieObject.photoName} alt={movieObject.name} />
            <div> <br />
                <h3>{movieObject.name}</h3>
                <h5>{movieObject.duracion}</h5> 
                <h4>{movieObject.estudio}</h4>
                <p>{movieObject.secuela===true?"Has sequels!": "No sequel :("}</p>

            </div>
        </li>
    )
}