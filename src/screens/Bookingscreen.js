import '../App.css';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Box } from '@mui/material';
import Loader from '../components/Loader.js';


const Bookingscreen = () => {

    let movieId = useParams();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    const [movie, setMovie] = useState()

    useEffect(() => {

        const fetchData = async () => {

            try {

                setLoading(true);

                await axios.post(`http://localhost:5000/api/movies/getmoviebyid`, { movieId: movieId.id })
                    .then((response) => {

                        setMovie(response.data.movie);
                        setLoading(false);
                        console.log(response.data.movie[0])


                    });



            } catch (err) {

                console.log(err)
                setError(true)
            }
        }
        fetchData()


    }, [])

    let len = 2;



    return (
        <>

            {loading ?

                <Loader /> :
                error ?
                    <h1>Error</h1> :
                    <>
                        <div>
                            {console.log(error, loading, movie)}
                            <h2>{movie[0].movieName}</h2>
                            <Box className='bookingContainer'>
                                <img src={movie[0].imageUrl[2]} alt="movie image" className='bookingImg' />


                                <div className='bookingDetails'>
                                    <h3>{movie[0].movieName}</h3>
                                    <ul className="movieGenere">
                                        {movie[0].movieGener.map((gener, i) =>

                                            (i !== len) ?
                                                <li >{gener} /</li> :
                                                <li >{gener}</li>

                                        )}

                                    </ul>
                                    <h4>Ratings: {movie[0].rating}</h4>
                                    <p>{movie[0].aboutMovie}</p>
                                    <div className='bookingBtn'>
                                        <div >
                                            <Link to={`/book/${movieId.id}/shows`}>
                                                <Button variant="contained">Book Tickets</Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </Box>
                        </div>
                    </>
            }


        </>




    )
}

export default Bookingscreen;