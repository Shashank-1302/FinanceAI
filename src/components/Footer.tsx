import React from 'react';
import { Box, Flex, Text, Image, Link, IconButton, HStack, Divider } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box 
      bg="white"
      py={4}
      width="100%"
      fontFamily="Inter, sans-serif"
      justifyContent="center"
    >
      <Divider />
      <Flex p="5" maxW="7xl" mx="auto" px={4} align="center" justify="space-between">
        {/* <Box pl={4}>
          <HStack ml="0.25rem">
          
          <Text fontSize="20px" lineHeight="30%" fontWeight="600">Finance AI</Text>
          </HStack>
        </Box> */}
        <Text fontSize="14px" color="rgb(102 102 102)" textAlign="center" flex={1} ml="8rem">
          &copy; {new Date().getFullYear()}  FinanceAI. All rights reserved
        </Text>
        
      </Flex>
    </Box>
  );
};

export default Footer;