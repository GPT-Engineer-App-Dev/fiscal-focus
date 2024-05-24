import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box bg="gray.100" p={4} borderRadius="md">
          <Heading as="h1" size="xl" mb={4}>Welcome to Financial Times</Heading>
          <Text fontSize="lg">
            Stay updated with the latest financial news, market trends, and in-depth analysis from around the world.
          </Text>
        </Box>
        <Box bg="gray.100" p={4} borderRadius="md">
          <Heading as="h2" size="lg" mb={4}>Top Stories</Heading>
          <Text fontSize="md">
            - Story 1: Market hits record high<br />
            - Story 2: New economic policies announced<br />
            - Story 3: Major merger in the tech industry
          </Text>
        </Box>
        <Box bg="gray.100" p={4} borderRadius="md">
          <Heading as="h2" size="lg" mb={4}>Latest Articles</Heading>
          <Text fontSize="md">
            - Article 1: Analysis of the current market trends<br />
            - Article 2: Impact of new regulations on businesses<br />
            - Article 3: Future of the global economy
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;