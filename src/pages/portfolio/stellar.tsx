import { ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Link,
  Text,
  Heading,
  Image,
  List,
  ListItem,
  Flex,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { Layout } from "../../components/Layout";
import Section from "../../components/Section";

interface stellarProps {}

const stellar: React.FC<stellarProps> = ({}) => {
  return (
    <>
      <Layout>
        <Section>
          <Box>
            <Image src={"../stellar/stellar-thumb1.jpg"} />
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
              Stellar Bulk
            </Heading>
            <Text>
              <Link href="https://www.stellar.org/" color={"teal"}>
                Stellar
              </Link>{" "}
              is known as blazingly fast and one of the lowest fee on the
              blockchain competition. Its common to use "burner" account for
              every transaction using stellar network. But those burner account
              will reserve 1.5XLM for every account. This app created for
              merging those reserve in each account in batch with one click. So
              no more pain merging stellar account one by one.
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
                    <Link href="https://stellar-bulk.primaftr.me/">
                      Stellar Bulk <ExternalLinkIcon mx="2px" />
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
                    React, Typescript, NextJS, Stellar Blockchain SDK
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex>
                    <Box minW={"100px"}>
                      <Badge
                        colorScheme={useColorModeValue("teal", "purple")}
                        mr={3}
                      >
                        Source
                      </Badge>
                    </Box>
                    <Link href="https://github.com/primaftr/stellar-bulk">
                      https://github.com/primaftr/stellar-bulk
                      <ExternalLinkIcon mx="2px" />
                    </Link>
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
              <Image my={3} borderRadius="lg" src="../stellar/stellar.png" />
            </Box>
          </Section>
        </Box>
      </Layout>
    </>
  );
};

export default stellar;
