import { ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Flex,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import NextLink from "next/link";
import React from "react";
import { Layout } from "../../components/Layout";
import Section from "../../components/Section";

interface TravelGAProps {}
// const badge = useColorModeValue("black", "purple");
const TravelGA: React.FC<TravelGAProps> = ({}) => {
  return (
    <>
      <Layout>
        <Section>
          <Box>
            <Image src={"../travel/laravel-thumb.jpg"} />
          </Box>
        </Section>
        <Box my={5}>
          <Section delay={0.4}>
            <NextLink href="/portfolio" passHref>
              <Link>Portfolio</Link>
            </NextLink>
            <span>
              <ChevronRightIcon />
            </span>
            <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
              Travel-GA
            </Heading>
            <Text>
              An app for route optimization for <i>travel</i> (indonesian public
              transport) using <i>Genetic Algorithm</i>. Made for final project
              on my Bachelor Degree.
            </Text>

            <Box my={5}>
              <List>
                <ListItem>
                  <Flex>
                    <Box minW={"100px"}>
                      <Badge
                        colorScheme={useColorModeValue("teal", "purple")}
                        mr={3}
                      >
                        Link
                      </Badge>
                    </Box>
                    <Link href="https://travel-ga.primaftr.me/">
                      Travel-GA <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex>
                    <Box minW={"100px"}>
                      <Badge
                        colorScheme={useColorModeValue("teal", "purple")}
                        mr={3}
                      >
                        Stack
                      </Badge>
                    </Box>
                    PHP, MySQL, Laravel, Vue
                  </Flex>
                </ListItem>
              </List>
            </Box>
          </Section>
          <Section delay={0.8}>
            <Heading display="inline-block" as="h2" fontSize={20} mb={4}>
              Preview
            </Heading>
            <Box>
              <Image my={3} borderRadius="lg" src="../travel/travel-1.jpg" />
              <Image my={3} borderRadius="lg" src="../travel/travel-2.png" />
              <Image my={3} borderRadius="lg" src="../travel/travel-3.png" />
            </Box>
          </Section>
        </Box>
      </Layout>
    </>
  );
};

export default TravelGA;
