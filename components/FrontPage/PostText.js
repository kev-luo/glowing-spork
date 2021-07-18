import {
  Box,
  Heading,
  Text,
  HStack,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

// home page - single post text
export default function PostText({ post }) {
  return (
    <Box
      display="flex"
      flex="10"
      flexDirection="column"
      justifyContent="center"
      mt={{ base: "3", sm: "0" }}
    >
      <Heading
        mt="1"
        as="h4"
        size="md"
        color={useColorModeValue("gray.700", "gray.200")}
        _hover={{ cursor: "pointer" }}
      >
        {post.title}
      </Heading>
      <HStack mt="2" spacing="2" display="flex" alignItems="center">
        <Text fontWeight="medium">{post.username}</Text>
        <Text>-</Text>
        <Text>{post.createdAt}</Text>
      </HStack>
    </Box>
  );
}
