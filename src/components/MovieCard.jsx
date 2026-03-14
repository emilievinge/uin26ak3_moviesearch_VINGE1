import { Link } from "react-router-dom"

export default function MovieCard({movie}) {


    return (
        <>
        <h2>Foreslåtte filmer</h2>
        {movie?.Search?.map((mov) => (
            <article className="movie-card" key={mov?.imdbID} >
                <Link to={`/${mov.imdbID}`}>
                    <h3>
                        {mov?.Title}
                    </h3>
                    {/*Kilde til if-test hvis bilde mangler: https://chatgpt.com/c/69b55c19-459c-832f-ad77-8dada0897e00 
                    KI ga meg også en kode til hvis linken er der, men ikke fungerer/gir feilmelding, men da glitcher alt-teksten på siden.
                    Kilde til bilde fra Pixabay: https://pixabay.com/illustrations/cinema-strip-movie-video-64074/*/}
                    <img id="poster"
                        src={mov.Poster !== "N/A" ? mov.Poster : "/no-image.jpg"} 
                        alt={mov.Title}
                    />
                    <p>
                        Utgivelsesår: {mov?.Year}
                    </p>
                </Link>
            </article>))}
        </>
    )
}