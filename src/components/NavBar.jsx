import React from 'react';
import { Button, Navbar } from 'flowbite-react';
import logo from '../assets/logo-removebg-preview.png'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Navbar fluid rounded className='container my-10 mx-auto'>
                <Navbar.Brand href="https://flowbite-react.com">
                    <img src={logo} className="mr-3 h-9 sm:h-9" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl text-red-600 font-semibold dark:text-white">IU DonorDB</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Button color='failure'>Sign In</Button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link className='text-red-600 hover:text-xl' href="#">Home</Navbar.Link>
                    <Navbar.Link className='text-red-600 hover:text-xl' href="#">Find Donor</Navbar.Link>
                    <Link className='text-red-600 hover:text-xl' to="/registration">Be a Donor</Link>
                    <Link className='text-red-600 hover:text-xl' to="/addBloodRequest">Add Blood Request</Link>
                    <Navbar.Link className='text-red-600 hover:text-xl' href="#">Blogs</Navbar.Link>
                    <Navbar.Link className='text-red-600 hover:text-xl' href="#">About Us</Navbar.Link>
                    
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;