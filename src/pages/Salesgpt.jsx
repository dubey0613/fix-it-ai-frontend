import React, { useEffect } from 'react';
import { useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, ModalCloseButton, useToast, Flex} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import Sidebar from '../components/Sidebar';
import BotGPT from '../components/Botgpt';


const Salesgpt = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
    const toast = useToast();
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            // User is authenticated, redirect to dashboard or handle as needed
            //navigate('/salesgpt');
            toast({
                title: 'Login Successful!',
                description: "You've successfully logged in.",
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
        } else {
            // User is not authenticated, open the login modal
            onOpen();
        }
    }, []);

    const handleLogin = async () => {
        try{
            await signInWithPopup(auth, provider).then((data) => {
            localStorage.setItem('user', JSON.stringify(data.user.displayName));
            // User is authenticated, redirect to dashboard or handle as needed
            navigate('/salesgpt');
        });
        onClose();
        toast({
            title: 'Login Successful!',
            description: "You've successfully logged in.",
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
    }catch(err){
        toast({
            title: 'Login Failed!',
            description: "Please try again.",
            status: 'error',
            duration: 3000,
            isClosable: true,
        });
    }
    };

    const handleClose = () => {
        // Redirect to the home page
        navigate('/');
        onClose();
    };

    return (
        <div className='bg-white w-full h-screen'>
            <Flex>
            <Sidebar />
            <BotGPT />
            <div className='flex justify-center content-center items-center'>
                <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader className='text-black'>Required</ModalHeader>
                        <ModalCloseButton colorScheme={"yellow"} onClick={handleClose} />
                        <ModalBody>
                            <p className='opacity-75 text-black'>We are dealing with some sensitive data.</p>
                        </ModalBody>
                        <ModalFooter>
                            <Button className='border-1 border-black' onClick={handleLogin}>
                                Continue with Google
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </div>
            </Flex>
        </div>
    );
};

export default Salesgpt;
