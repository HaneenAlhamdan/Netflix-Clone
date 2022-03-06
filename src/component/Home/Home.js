import MovieList from "../MovieList/MovieList";
import Navbar from "../Navbar/Navbar";

import "../Home/Home.css";
import { useState, useEffect } from "react";

export default function Home() {
    const [movie, setMovie] = useState([]);
    async function getData() {
        
        let response = await fetch(`${process.env.REACT_APP_SERVER}/trending`);
        let data = await response.json();
        setMovie(data);
    }
    useEffect(() => {
        getData()
    }, []);
    return (
        <>
            <Navbar />
            {movie && <MovieList data={movie} />}
          
        </>

    )
}