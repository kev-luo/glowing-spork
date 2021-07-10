import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Flex align="center">
      <Box {...props}>
        {/* replace with SVG */}
        <Text fontSize="lg" fontWeight="bold">
          Logo
        </Text>
      </Box>
    </Flex>
  );
}
