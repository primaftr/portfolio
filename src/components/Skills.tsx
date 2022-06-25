import {
  Box,
  Flex,
  Grid,
  GridItem,
  Icon,
  Progress,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaLaravel, FaPhp, FaVuejs } from "react-icons/fa";
import {
  SiGraphql,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from "react-icons/si";

const Skills: React.FC = () => {
  const skill = [
    { name: "PHP", logo: FaPhp, bar: 95 },
    { name: "MYSQL", logo: SiMysql, bar: 92 },
    { name: "Laravel", logo: FaLaravel, bar: 89 },
    { name: "NodeJs", logo: SiNodedotjs, bar: 80 },
    { name: "Vue", logo: FaVuejs, bar: 75 },
    { name: "React", logo: SiReact, bar: 72 },
    { name: "GraphQL", logo: SiGraphql, bar: 73 },
    { name: "PostgreSQL", logo: SiPostgresql, bar: 80 },
    { name: "Javascript", logo: SiJavascript, bar: 95 },
    { name: "Typescript", logo: SiTypescript, bar: 80 },
  ];
  return (
    <>
      <Flex margin={"auto"}>
        <Box>
          <Stack spacing={2}>
            {skill.map((item) => (
              <>
                <Grid templateColumns={"repeat(2,1fr)"}>
                  <GridItem>
                    <Box
                      minW={"8em"}
                      alignSelf="center"
                      alignContent={"center"}
                      alignItems="center"
                      justifyContent={"center"}
                      justifyItems="center"
                      justifySelf={"center"}
                    >
                      <Icon as={item.logo} mr="2" />
                      {item.name}
                    </Box>
                  </GridItem>
                  <GridItem alignSelf={"center"}>
                    <Box minW={"20em"}>
                      <Progress
                        colorScheme={useColorModeValue("pink", "teal")}
                        value={item.bar}
                      />
                    </Box>
                  </GridItem>
                </Grid>
              </>
            ))}
          </Stack>
        </Box>
      </Flex>
    </>
  );
};
export default Skills;
