import style from "./Styles/OwnerCard-styles.module.css";

export default function OwnerCard() {

    return (
        <section className={`${style["container"]}`}>
            <div >
                <img src="/imagenes/Portada.jpeg" alt="Owner img" className={`${style["portada"]}`} /> <br /> <br />
                <h2>Carlos Lopez</h2> <br />
                <p className={`${style["data"]}`}>Web fullstack developer jr.</p> <br /> <br />
                <p className={`${style["data"]}`}>24 years old, taurus</p> <br /> <br />
                <p className={`${style["data"]}`}>Friendly and funny always ready for a new adventure.</p> <br /> <br />
                <a href="https://github.com/Carlos-Lop-C"><button className={`${style["button"]}`}>Github</button></a>

                <a href="https://www.linkedin.com/in/carlos-l%C3%B3pez-calder%C3%B3n-a9a395192?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><button className={`${style["button"]}`}>LinkedIn</button></a>
            </div>
        </section>
    );
}