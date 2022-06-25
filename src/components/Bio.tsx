import { Box, Flex, Heading } from "@chakra-ui/react";

export const Bio = ({ year, children }) => (
  <Flex>
    <Box fontWeight={"bold"} minW="8em">
      {year}
    </Box>
    <Box ml={5}>{children}</Box>
  </Flex>
);
