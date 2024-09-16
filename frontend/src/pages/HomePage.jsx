import { Container, Text, VStack, Link, SimpleGrid } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { Link as RouterLink } from 'react-router-dom';
import { useProductStore } from '../store/product';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const { fetchProduct, products } = useProductStore();
  
  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);
  

  
  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize="30px"
          fontWeight="bold"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          textAlign="center"
          display="flex"
          alignItems="center"
          gap={2}
        >
          Current Products
          <CiShoppingCart
            size={30}
            color="#7928CA"
            style={{ marginLeft: '8px' }}
          />
        </Text>
        
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }}
          spacing={10}
          w={'full'}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>
        
        {products.length===0&&(<Text
          fontSize="x-large"
          textAlign="center"
          fontWeight="bold"
          color="gray.500"
        >
          No Product here{' '}
          <Link as={RouterLink} to="/create">
            <Text
              as="span"
              color="blue.500"
              _hover={{ textDecoration: 'underline' }}
            >
              Create A Product +
            </Text>
          </Link>
        </Text>)}
      </VStack>
    </Container>
  );
};

export default HomePage;
