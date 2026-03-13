    
export default function MovieCard() {
    const [movie, setMovie] = useState()
    
    return (
        <h2>Foreslåtte filmer</h2>
        {movie?.Search?.map((movie) => (
            <article key={movie?.imdbID} >
                <h3>{movie?.Title}</h3>
                <img src={movie.Poster ? movie.Poster : "Bilde mangler"} alt="Filmplakat"/>
                <p>Utgivelsesår: {movie?.Year}</p>
            </article>))}
    )
}