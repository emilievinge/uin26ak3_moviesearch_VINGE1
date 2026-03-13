import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import MovieCard from "../components/MovieCard"

export default function Home(){
    // Hjelp til søk https://chatgpt.com/c/69b2c210-8840-8332-a01d-34b2566c7850
    const [search, setSearch] = useState("james bond 007")
    const [focused, setFocused] = useState(false)
    
    const baseUrl = `http://www.omdbapi.com/?s=${search}&apikey=`
    // GJØR DETTE!!! API key skal ikke ligge "offentlig".
    const apiKey = import.meta.env.VITE_APP_API_KEY

    useEffect(() => {
        getMovies()
    }, [])

    const getMovies = async()=>{
        try
        {
            const response = await fetch(`${baseUrl}${apiKey}`)
            const data = await response.json()
            
            // KI ba meg sette inn denne. https://chatgpt.com/c/69b2c210-8840-8332-a01d-34b2566c7850
            setMovie(data)
            console.log(data)
        }
        catch(err)
        {
            console.error(err);
        }
    }

    const handleChange = (e)=>{
        setSearch(e.target.value)
    }


    const handleSubmit = (e)=>{
        e.preventDefault()
        e.target.reset()
    }

    return (
        <main>
            <h1>Forside</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Søk etter film
                    <input  type="search" placeholder="Harry Potter" onChange={handleChange} onFocus={()=> setFocused(true)} /*onBlur={()=> setFocused(false)}*/></input>
                </label>
    
                <button onClick={getMovies}>Søk</button>
            </form>
            <section>
                <MovieCard />
            </section>
            <footer>Movie search 2026</footer>
        </main>
    )
}