import { Box, Heading, SimpleGrid, Image, VStack, Text, Button, Select, Input, HStack } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: 699, category: "Electronics", brand: "Brand A", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: 999, category: "Electronics", brand: "Brand B", image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: 199, category: "Accessories", brand: "Brand A", image: "/images/headphones.jpg" },
];

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const ProductList = () => {
  const query = useQuery();
  const searchQuery = query.get("q") || "";
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredProducts = sampleProducts.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (category === "" || product.category === category) &&
      (brand === "" || product.brand === brand) &&
      (minPrice === "" || product.price >= parseFloat(minPrice)) &&
      (maxPrice === "" || product.price <= parseFloat(maxPrice))
    );
  });

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6}>Product Listing</Heading>
      <HStack spacing={4} mb={6}>
        <Select placeholder="Select category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Electronics">Electronics</option>
          <option value="Accessories">Accessories</option>
        </Select>
        <Select placeholder="Select brand" value={brand} onChange={(e) => setBrand(e.target.value)}>
          <option value="Brand A">Brand A</option>
          <option value="Brand B">Brand B</option>
        </Select>
        <Input placeholder="Min price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
        <Input placeholder="Max price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
      </HStack>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {filteredProducts.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Image src={product.image} alt={product.name} />
            <VStack spacing={2} mt={4}>
              <Heading as="h3" size="md">{product.name}</Heading>
              <Text>${product.price}</Text>
              <Button as={Link} to={`/product/${product.id}`} colorScheme="teal">View Details</Button>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProductList;