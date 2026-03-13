    
export default function MovieCard({movie}) {


    return (
        <>
        <h2>Foreslåtte filmer</h2>
        {movie?.Search?.map((mov) => (
            <article key={mov?.imdbID} >
                <h3>{mov?.Title}</h3>
                <img src={mov.Poster ? mov.Poster : "Bilde mangler"} alt="Filmplakat"/>
                <p>Utgivelsesår: {mov?.Year}</p>
            </article>))}
        </>
    )
}