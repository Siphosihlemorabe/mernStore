import { Button, Container, Flex, HStack, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosAddCircle } from 'react-icons/io'; // Correct import for Add Circle icon
import { FaSun } from "react-icons/fa6";
import { MdDarkMode } from 'react-icons/md'; // Correct import for Dark Mode icon
import { useProductStore } from '../store/product';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="1140px" px={4}>
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        flexDir={{
          base: 'column',
          sm: 'row',
        }}
      >
        <Link to="/">
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize={{ base: '22', sm: '28' }}
            fontWeight="extrabold"
            textAlign="center"
            textTransform="uppercase"
          >
            Product Store
          </Text>
        </Link>
        <HStack spacing={2} alignItems="center">
          <Link to="/create">
            <Button>
              <IoIosAddCircle fontSize={22} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MdDarkMode /> :<FaSun />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
