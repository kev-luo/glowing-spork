import { Box, Image, useColorModeValue } from "@chakra-ui/react";

// home page - single post image
export default function PostImage(props) {
  const { postEmoji } = props;
  console.log(postEmoji);
  return (
    <Box
      display="flex"
      flex="1"
      marginRight="3"
      position="relative"
      alignItems="center"
    >
      <span>{postEmoji}</span>
    </Box>
  );
}
