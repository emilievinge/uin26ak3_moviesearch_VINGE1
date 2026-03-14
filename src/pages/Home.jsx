import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import MovieCard from "../components/MovieCard"

export default function Home({movies, setMovies}){
    const [search, setSearch] = useState("james bond 007")
    const [focused, setFocused] = useState(false)
    
    const baseUrl = `http://www.omdbapi.com/?s=${search}&apikey=`
    // GJØR DETTE!!! API key skal ikke ligge "offentlig".
    const apiKey = import.meta.env.VITE_APP_API_KEY

    const getMovies = async()=>{
        try
        {
            const response = await fetch(`${baseUrl}${apiKey}`)
            const data = await response.json()
            
            setMovies(data)
            console.log(data)
        }
        catch(err)
        {
            console.error(err);
        }
    }

    //useEffect som henter filmer etter brukeren har skrevet inn minst 3 bokstaver
        //Kilde: Medstudent van Gemert, A. (2026).
    useEffect(() => {
        if (search.length >= 3) {
            getMovies()
        }
    }, [search])

    const handleChange = (e)=>{
        setSearch(e.target.value)
    }


    const handleSubmit = (e)=>{
        e.preventDefault()
        e.target.reset()
    }

    return (
        <main>
            <h1>Hjem</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Søk etter film
                    <input id="search" type="search" placeholder="Harry Potter" onChange={handleChange} onFocus={()=> setFocused(true)} ></input>
                </label>
    
                <button id="search-btn" onClick={getMovies}>Søk</button>
            </form>
            <section id="movies">
                <MovieCard movie={movies} />
            </section>
            <footer>Movie search 2026</footer>
        </main>
    )
}