import { Flex, FlexProps } from "@chakra-ui/react";

export const Container = (props: FlexProps) => (
  <Flex
    direction="column"
    maxW={600}
    mx={"auto"}
    p={5}
    mt={5}
    transition="all 0.15s ease-out"
    {...props}
  />
);
