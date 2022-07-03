import { useColorModeValue, Box, Icon, SimpleGrid } from "@chakra-ui/react";
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
      <SimpleGrid columns={3} spacing={2}>
        {skill.map((item) => (
          <>
            <Box
              alignSelf="center"
              alignContent={"center"}
              alignItems="center"
              justifyContent={"center"}
              justifyItems="center"
              justifySelf={"center"}
              display={"flex"}
              flexDir="column"
              key={item.name}
            >
              <Box
                display={"flex"}
                borderRadius={"full"}
                borderColor="white"
                bg={useColorModeValue("gray.100", "whiteAlpha.200")}
                w="3em"
                h="3em"
                alignSelf="center"
                alignContent={"center"}
                alignItems="center"
                justifyContent={"center"}
                justifyItems="center"
                justifySelf={"center"}
                borderWidth={2}
                my="2"
                borderStyle="solid"
              >
                <Icon
                  // color={useColorModeValue("", "white")}
                  as={item.logo}
                  boxSize="1.5em"
                  mx="2"
                />
              </Box>
              {item.name}
            </Box>
          </>
        ))}
      </SimpleGrid>
    </>
  );
};
export default Skills;
