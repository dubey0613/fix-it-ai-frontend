// Navbar.jsx

import React from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverHeader,
    PopoverAnchor,
    Portal,
    Button,
    useToast
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const storedUser = localStorage.getItem('user');
    const navigate = useNavigate();
    const toast = useToast();
    const handleLogout = () => {
        // Implement your logout logic here
        try{localStorage.removeItem('user');
        navigate('/');
        toast({
            title: 'Logout Successful!',
            description: "You've successfully logged out.",
            status: 'success',
            duration: 3000,
            isClosable: true,
        });}catch(err){
            toast({
                title: 'Logout Failed!',
                description: "Please try again.",
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <nav className='fixed top-0 left-0 w-full p-4 bg-custom-dark z-20'>
            <div className="container mx-auto">
                <div className="flex items-center justify-between content-center text-white ">
                    <Link to='/' className='flex items-center space-x-2 ml-10'>
                        <img src={logo} alt='logo' className='w-6 h-6' />
                        <p className='text-2xl font-normal'>fiXit</p>
                    </Link>
                    <div className='flex space-x-5 mr-10 text-white'>
                        <Link to="/aboutus" className='hover:text-gray-400'>About Us</Link>
                        {storedUser ? (
                            <Popover>
                                <PopoverTrigger>
                                    <span className='hover:text-gray-400 cursor-pointer'>{JSON.parse(storedUser)}</span>
                                </PopoverTrigger>
                                <Portal>
                                    <PopoverContent className="z-30">
                                        <PopoverArrow />
                                        <PopoverCloseButton />
                                        <PopoverHeader>Account</PopoverHeader>
                                        <PopoverBody>
                                            <Button className='bg-custom-dark' onClick={handleLogout}>Logout</Button>
                                        </PopoverBody>
                                    </PopoverContent>
                                </Portal>
                            </Popover>
                        ) : (
                            <Link to="/salesgpt" className='hover:text-gray-400'>Login/SignUp</Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
