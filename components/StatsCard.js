import React from "react";
import {
  StatLabel,
  Stat,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

export default function StatsCard(props) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 3, md: 8 }}
      py={5}
      shadow="xl"
      border="1px solid"
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded="lg"
    >
      <StatLabel fontWeight="medium" isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize="2xl" fontWeight="medium">
        {stat}
      </StatNumber>
    </Stat>
  );
}
