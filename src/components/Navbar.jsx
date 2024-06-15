import { Box, Flex, Link, Spacer, Heading, Input } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Box bg="teal.500" p={4}>
      <Flex align="center">
        <Heading as="h1" size="lg" color="white">
          <Link as={RouterLink} to="/">Electronics Store</Link>
        </Heading>
        <Input
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          width="200px"
          mr={4}
        />
        <Spacer />
        <Link as={RouterLink} to={{ pathname: "/", search: `?q=${searchQuery}` }} color="white" mr={4}>Home</Link>
        <Link as={RouterLink} to={{ pathname: "/products", search: `?q=${searchQuery}` }} color="white">Products</Link>
      </Flex>
    </Box>
  );
};

export default Navbar;