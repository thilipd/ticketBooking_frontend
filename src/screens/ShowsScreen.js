import { useParams } from 'react-router-dom';
import axios from 'axios';

const Shows = () => {
    let movieId = useParams();
    const fetchData = async () => {

        try {

            await axios.post(`http://localhost:5000/api/movies/getmoviebyid`, { movieId: movieId.id })

        } catch (err) {

            console.log(err)

        }
    }
    fetchData()


    return (
        <>
            <h1> {movieId.id}</h1>
        </>
    )
}


export default Shows; 