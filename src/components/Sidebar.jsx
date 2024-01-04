import React from 'react';
// import { Link } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';

const Sidebar = () => {
  return (
    <Box
      color="white"
      minH="100vh"
      p={4}
      className='bg-custom-dark w-64'
      textAlign={'center'}
    >
        <div className='flex mt-20 flex-col'>
      <Text colorScheme='blue' mb={4} className='text-blue-300'>
        Call Audit
      </Text>

      <Text colorScheme='blue' mb={4} className='text-blue-300'>
        AI Agent
      </Text>
      </div>
    </Box>
  );
};

export default Sidebar;
