
import '../App.css';
import * as React from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Container,
    Button,
    ButtonGroup,
    ClickAwayListener,
    Grow,
    Paper,
    Popper,
    MenuItem,
    MenuList
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);



    const logout = () => {
        localStorage.removeItem('currentUser');
        window.location.href = "/login"
    }

    const booking = () => {
        console.log('bookings')
    }

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    const user = JSON.parse(localStorage.getItem('currentUser'));

    console.log(user);


    return (
        <AppBar position="static">
            <Container >
                <Toolbar disableGutters className='appBar'>
                    <Container className='logoSection'>
                        <Link to='/'>
                            <h3> Book My Show</h3>
                        </Link>
                    </Container >
                    <Container className='loginSection' >

                        {user ? <>
                            <h1> <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
                                <Button>{user.name}</Button>
                                <Button
                                    size="small"
                                    aria-controls={open ? 'split-button-menu' : undefined}
                                    aria-expanded={open ? 'true' : undefined}
                                    aria-label="select merge strategy"
                                    aria-haspopup="menu"
                                    onClick={handleToggle}
                                >
                                    <ArrowDropDownIcon />
                                </Button>
                            </ButtonGroup>
                                <Popper
                                    open={open}
                                    anchorEl={anchorRef.current}
                                    role={undefined}
                                    transition
                                    disablePortal
                                >
                                    {({ TransitionProps, placement }) => (
                                        <Grow
                                            {...TransitionProps}
                                            style={{
                                                transformOrigin:
                                                    placement === 'bottom' ? 'center top' : 'center bottom',
                                            }}
                                        >
                                            <Paper>
                                                <ClickAwayListener onClickAway={handleClose}>
                                                    <MenuList id="split-button-menu" autoFocusItem>

                                                        <MenuItem onClick={(e) => booking(e)} >
                                                            Bookings
                                                        </MenuItem>
                                                        <MenuItem onClick={(e) => logout(e)}>
                                                            Logout
                                                        </MenuItem>

                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper></h1>
                        </> : <>
                            <Link to='/signup'>
                                <Button color="inherit">SignUp</Button>
                            </Link>
                            <Link to='/login'>
                                <Button color="inherit">Login</Button>
                            </Link>
                        </>}

                    </Container>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;
