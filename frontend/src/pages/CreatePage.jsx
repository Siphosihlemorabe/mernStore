import { Box, Button, Container, Heading, Input, useColorModeValue, VStack, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useProductStore } from '../store/product';

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: ""
  });
  
  const toast = useToast(); 

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        duration: 3000,
        isClosable: true
      });
    }
    setNewProduct({name:"",price:"",image:""})
  }

  const { createProduct } = useProductStore();

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"}>
          Create New Product
        </Heading>
        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          p={5}
          rounded={"lg"}
          shadow={"md"}
        ></Box>
      </VStack>
      <VStack spacing={4}>
        <Input
          placeholder='Product Name'
          name='name'
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          type='text' // Changed from 'number' to 'text'
        />
        
        <Input
          placeholder='Product Price'
          name='price'
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          type='number' // Use number for price if you want numerical validation
        />

        <Input
          placeholder='Product Image URL'
          name='image'
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} // Corrected to update the 'image' field
          type='text'
        />
        
        <Button colorScheme='purple' onClick={handleAddProduct}>Add product</Button>
      </VStack>
    </Container>
  );
}

export default CreatePage;
