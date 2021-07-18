import { Box, Image, useColorModeValue } from "@chakra-ui/react";

// home page - single post image
export default function PostImage(props) {
  const { label, emoji } = props;
  return (
    <Box
      display="flex"
      flex="1"
      marginRight="3"
      position="relative"
      alignItems="center"
      justifyContent="center"
    >
      <span
        role="img"
        aria-label={label ? label : ""}
        aria-hidden={label ? "false" : "true"}
      >
        {emoji}
      </span>
    </Box>
  );
}
