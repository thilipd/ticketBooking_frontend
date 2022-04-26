import { useState, useEffect } from 'react';
import axios from 'axios';
import Movies from '../components/Movie';


const Homescreen = () => {

    const [movies, setMovies] = useState([]);


    useEffect(() => {
        const fetchData = async () => {

            try {
                await axios.get(`http://localhost:5000/api/movies/getallmovies`)
                    .then((response) => {
                        setMovies(response.data.movies)

                    });

            } catch (err) {

                console.log(err)

            }
        }
        fetchData();

    }, [])


    return (
        <>
            <div>
                <div>
                    <h1>Search bar here</h1>
                </div>

                <div>
                    <div>
                        <h2>Movies List</h2>
                    </div>
                    <div className="moviesList">

                        {(movies.map((movie, i) => {

                            return (

                                <Movies movieDetails={movie} i={i} />

                            )
                        }))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homescreen