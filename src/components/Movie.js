
import { Card, Modal, Button, Box } from '@mui/material';
import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,

    p: 4,
};

const Movies = (props) => {

    // let len = props.movieDetails.movieGener.length - 1;

    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex, e) => {
    //     setIndex(selectedIndex);
    // }
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    return (
        <>
            <Card elevation={3} className={`movieCard movieCard${props.i}`}>
                <img src={props.movieDetails.imageUrl[0]} className='movieImg' />
                <h1>{props.movieDetails.movieName}</h1>



                <Link to={`/book/${props.movieDetails._id}`}>
                    <Button variant="contained">View Details</Button>
                </Link>
            </Card>

            {/* <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className='modalWindow'
            >
                <Box sx={style}>
                    <img src={props.movieDetails.imageUrl[0]} alt="movie image" className='modalImg' />


                    <div>
                        <h3>{props.movieDetails.movieName}</h3>
                        <ul className="movieGenere">
                            {props.movieDetails.movieGener.map((gener, i) =>

                                (i !== len) ?
                                    <li >{gener} /</li> :
                                    <li >{gener}</li>

                            )}

                        </ul>
                        <h4>Ratings: {props.movieDetails.rating}</h4>
                        <p>{props.movieDetails.aboutMovie}</p>
                        <Button variant="contained">Book Tickets</Button>
                    </div>

                </Box>
            </Modal> */}
        </>
    )
}

export default Movies;