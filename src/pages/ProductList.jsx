import { Box, Heading, SimpleGrid, Image, VStack, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$699", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: "$999", image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: "$199", image: "/images/headphones.jpg" },
];

const ProductList = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6}>Product Listing</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {sampleProducts.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Image src={product.image} alt={product.name} />
            <VStack spacing={2} mt={4}>
              <Heading as="h3" size="md">{product.name}</Heading>
              <Text>{product.price}</Text>
              <Button as={Link} to={`/product/${product.id}`} colorScheme="teal">View Details</Button>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProductList;