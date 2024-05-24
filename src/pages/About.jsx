import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => (
  <Box p={4}>
    <Heading as="h1" mb={4}>About Financial Times</Heading>
    <Text fontSize="lg">
      Financial Times is a leading global business publication, known for its in-depth analysis and comprehensive coverage of financial markets, industries, and international affairs.
    </Text>
  </Box>
);

export default About;