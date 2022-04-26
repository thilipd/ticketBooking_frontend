import { Card, Button, Box } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import Error from '../components/Error';
import Loader from 'react-spinners/PacmanLoader';

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const login = async () => {


        try {

            setLoading(true);

            await axios.post('http://localhost:5000/api/users/login', {
                email: email,
                password: password
            }).then((res) => {

                setLoading(false);

                localStorage.setItem('currentUser', JSON.stringify(res.data));
                window.location.href = "/"

            })




        } catch (err) {

            console.log(err)
            setLoading(false)
            setError(true)
        }

    }


    const handleSubmit = (e) => {
        e.preventDefault();
        login();


    }
    return (
        <>
            {loading && <Loader />}

            <Box className='formContainer'>
                {error && <Error message="Login failed, please check the given details" />}
                <Card className='loginForm'>
                    <h1>LogIn </h1>
                    <form onSubmit={handleSubmit}>
                        <input type={"email"}
                            className="formData"
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} /><br /><br />

                        <input type="text"
                            className="formData"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} /><br /><br />

                        <input type='submit' value="LogIn" />

                    </form>
                </Card>

            </Box>
        </>
    )
}


export default Login