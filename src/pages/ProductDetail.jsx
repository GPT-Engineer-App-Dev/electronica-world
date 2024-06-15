import { Box, Heading, Image, Text, VStack, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$699", description: "A high-end smartphone with a great camera.", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: "$999", description: "A powerful laptop for all your needs.", image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: "$199", description: "Noise-cancelling headphones for immersive sound.", image: "/images/headphones.jpg" },
];

const ProductDetail = () => {
  const { productId } = useParams();
  const product = sampleProducts.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <Box p={4}>
      <VStack spacing={4} align="center">
        <Image src={product.image} alt={product.name} />
        <Heading as="h1" size="xl">{product.name}</Heading>
        <Text fontSize="lg">{product.price}</Text>
        <Text>{product.description}</Text>
        <Button colorScheme="teal">Add to Cart</Button>
      </VStack>
    </Box>
  );
};

export default ProductDetail;