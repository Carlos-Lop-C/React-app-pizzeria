
import { useState, useEffect } from "react";
import Movies from "./Movies";

export default function Favs() {
    const [movies, setMovies] = useState([
        {
            name: "Como entrenar a tu dragon",
            duracion: "120 min",
            estudio: "Dreamworks",
            secuela: true,
            photoName: "portadas/HTTYD.jpeg",
        },
        {
            name: "Kung Fu panda",
            duracion: "120 min",
            estudio: "Dreamworks",
            secuela: true,
            photoName: "portadas/Panda.jpg",
        },
        {
            name: "John wick",
            duracion: "120 min",
            estudio: "Dreamworks",
            secuela: true,
            photoName: "portadas/john wick.jpg",
        },
        {
            name: "Wall-e",
            duracion: "120 min",
            estudio: "Dreamworks",
            secuela: false,
            photoName: "portadas/walle.jpeg",
        },
        {
            name: "Shrek",
            duracion: "120 min",
            estudio: "Dreamworks",
            secuela: true,
            photoName: "portadas/shrek.jpg",
        }
    ]);

    useEffect(() => {
        setMovies(prevMovies =>
            prevMovies.map(movie =>
                movie.secuela === false ? { ...movie, notsequel: true } : movie
            )
        );
    }, []);

    useEffect(() => {
        localStorage.setItem("Movies", JSON.stringify(movies));
    }, [movies]);

    return (
        <main>
            <br />
            <h2>My fav movies so far:</h2>
            <br />
            <ul>
                {movies.map((movie) => (
                    <Movies movieObject={movie} key={movie.name} />
                ))}
            </ul>
        </main>
    );
}