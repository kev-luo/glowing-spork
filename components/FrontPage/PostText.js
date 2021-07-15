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
      flex="2"
      flexDirection="column"
      justifyContent="center"
      marginTop={{ base: "3", sm: "0" }}
    >
      <Heading
        marginTop="1"
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
