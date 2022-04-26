import { Card, Button, Box } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import Success from '../components/Success';
import Error from '../components/Error';
import Loader from 'react-spinners/PacmanLoader';

const Signup = () => {



    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [mobile, setMobile] = useState();


    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(true);


    const signup = async () => {

        setLoading(true);
        try {
            await axios.post('http://localhost:5000/api/users/signup', {
                name: name,
                email: email,
                password: password,
                mobile: mobile

            })
            setLoading(false);
            setSuccess(true);


        } catch (err) {
            setError(true);
            console.log(err)

        }

    }




    const handleSubmit = (e) => {

        e.preventDefault();
        signup('');
        setName('');
        setEmail('');
        setPassword('');
        setMobile('');

    }


    return (
        <>
            {loading && <Loader />}
            {error && <Error />}

            <Box className='formContainer'>
                {success && <Success message="Successfully SignedIn" />}
                <Card className='signupForm'>
                    <h1>Sing Up </h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text"
                            className="formData"
                            placeholder='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)} /><br /><br />
                        <input type={"email"}
                            className="formData"
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} /><br /><br />
                        <input type={"text"}
                            className="formData"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} /><br /><br />
                        <input type={"number"}
                            className="formData"
                            placeholder='Mobile'
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)} /><br /><br />
                        <input type='submit' value="Sign Up" />

                    </form>
                </Card>

            </Box>
        </>
    )
}

export default Signup