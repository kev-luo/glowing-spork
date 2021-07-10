import React from "react";
import {
  Box,
  Image,
  useColorModeValue,
  Link as ChakraLink,
} from "@chakra-ui/react";

export default function PostImage() {
  return (
    <Box
      display="flex"
      flex="1"
      marginRight="3"
      position="relative"
      alignItems="center"
    >
      <Box
        width={{ base: "100%", sm: "85%" }}
        zIndex="2"
        marginLeft={{ base: "0", sm: "5%" }}
        marginTop="5%"
      >
        <ChakraLink textDecoration="none" _hover={{ textDecoration: "none" }}>
          <Image
            borderRadius="lg"
            src={
              "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
            }
            alt="some good alt text"
            objectFit="contain"
          />
        </ChakraLink>
      </Box>
      <Box zIndex="1" width="100%" position="absolute" height="100%">
        <Box
          bgGradient={useColorModeValue(
            "radial(orange.600 1px, transparent 1px)",
            "radial(orange.300 1px, transparent 1px)"
          )}
          backgroundSize="20px 20px"
          opacity="0.4"
          height="100%"
        />
      </Box>
    </Box>
  );
}
