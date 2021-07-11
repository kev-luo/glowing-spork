import React from "react";
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
      <Heading marginTop="1" _hover={{ cursor: "pointer" }}>
        {post.title}
      </Heading>
      <HStack mt="2" spacing="2" display="flex" alignItems="center">
        {/* <Image
          borderRadius="full"
          boxSize="40px"
          src={"https://100k-faces.glitch.me/random-image"}
          alt={`Avatar of ${post.username}`}
        /> */}
        <Text fontWeight="medium">{post.username}</Text>
        <Text>-</Text>
        <Text>{post.createdAt}</Text>
      </HStack>
      <Text
        as="p"
        marginTop="2"
        color={useColorModeValue("gray.700", "gray.200")}
        fontSize="lg"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the
      </Text>
    </Box>
  );
}
