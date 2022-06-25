import { ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Text,
  Badge,
  ListItem,
  Box,
  Heading,
  Image,
  Link,
  List,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

import React from "react";
import NextLink from "next/link";
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
            <Image src="/laravel-thumb.jpg" />
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
                    <Link href="https://www.inkdrop.app/">
                      https://www.inkdrop.app/ <ExternalLinkIcon mx="2px" />
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
              <Image borderRadius="lg" my={5} src="/laravel.jpg" />
              <Image borderRadius="lg" my={5} src="/laravel.jpg" />
              <Image borderRadius="lg" my={5} src="/laravel.jpg" />
            </Box>
          </Section>
        </Box>
      </Layout>
    </>
  );
};

export default TravelGA;
