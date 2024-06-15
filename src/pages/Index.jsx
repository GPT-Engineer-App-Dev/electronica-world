import { Box, Heading, Text, VStack, SimpleGrid, Image, Button } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$699", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: "$999", image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: "$199", image: "/images/headphones.jpg" },
];

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Index = () => {
  const query = useQuery();
  const searchQuery = query.get("q") || "";
  const filteredProducts = sampleProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <Box p={4}>
      <VStack spacing={4} align="center">
        <Heading as="h1" size="2xl">Welcome to Electronics Store</Heading>
        <Text fontSize="lg">Find the best electronics at unbeatable prices!</Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={10}>
          {filteredProducts.map((product) => (
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
      </VStack>
    </Box>
  );
};

export default Index;