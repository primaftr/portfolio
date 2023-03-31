import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  // Image,
  Link,
  List,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/react";

import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

import { GoMarkGithub } from "react-icons/go";
import { CgMail } from "react-icons/cg";
import { Bio } from "../components/Bio";
import { Hero } from "../components/Hero";
import { Layout } from "../components/Layout";
import PortfolioSection from "../components/PortfolioSection";
import Section from "../components/Section";
import NextImage from "next/image";
import Skills from "../components/Skills";
import NextLink from "next/link";
import { ChocCarousel } from "../components/ChocCarousel";
import ChakraNextImage from "../components/ChakraNextImage";

const Index = () => (
  <>
    <Layout>
      <Box>
        <Heading as={"h2"} variant="page-title">
          Hello! I am
        </Heading>
      </Box>
      <Box display={{ md: "flex" }} p={{ base: 0, md: 3 }} my="2">
        <Box flexGrow={1}>
          <Hero title="Prima Fitra Wahyu " />
          <p>Fullstack Developer</p>
        </Box>
        <Flex flexShrink={0} justifyContent="center" m={{ md: "auto" }}>
          {/* <Image
            borderRadius="full"
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            src="/me.jpg"
          /> */}
          <ChakraNextImage
            borderRadius="full"
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            alt="profile"
            h={"100px"}
            w={"100px"}
            maxW={"100px"}
            display="inline-block"
            src="/me.jpg"
          />
        </Flex>
      </Box>

      <Section>
        <Box mt={2} textAlign="justify">
          I am a fullstack web developer with experience in React, Vue,
          JavaScript, TypeScript, GraphQL, MySQL, and PostgreSQL. I am
          passionate about creating engaging and functional applications, and
          have a solid understanding of both front-end and back-end development.
          I am eager to bring my skills and experience to a dynamic and
          innovative company.
        </Box>
      </Section>

      <Section id="skilss">
        <Heading as="h1" variant={"section-title"}>
          Skills
        </Heading>
        <SimpleGrid columns={3} spacing={2}>
          <Skills />
        </SimpleGrid>
      </Section>
      <Section id="portfolio">
        <Heading as="h1" variant={"section-title"}>
          <NextLink href="/portfolio" passHref>
            <Link _hover={{ textDecoration: "none" }}>
              Portfolio
              <ExternalLinkIcon w={"4"} h={"4"} mx="3px" />
            </Link>
          </NextLink>
        </Heading>
        <Box display={"flex"} justifyContent="center">
          <Box mt="5">
            {/* <PortfolioSection /> */}
            <ChocCarousel />
          </Box>
        </Box>
      </Section>
      <Section id="bio" delay={0.4}>
        <Heading as="h1" variant={"section-title"}>
          Experiences
        </Heading>

        <Bio year="2016-2022">Freelance web developer </Bio>
        <Bio year="2022 to present">
          {" "}
          Fullstack Developer at{" "}
          <Link
            href="https://www.pi-xcels.com/"
            target={"_blank"}
            color={"teal"}
          >
            Pi-xcels
          </Link>
        </Bio>
      </Section>
      <Section id="bio" delay={0.4}>
        <Heading as="h1" variant={"section-title"}>
          Education
        </Heading>

        <Bio year="2010-2013">SMPN 32 Pekanbaru</Bio>
        <Bio year="2013-2016">SMAN 5 Pekanbaru</Bio>
        <Bio year="2016 to present"> Computer Science, Universitas Riau</Bio>
      </Section>

      <Section id="contacts" delay={0.6}>
        <Heading as="h1" variant={"section-title"}>
          Contacts
        </Heading>
        <Box mt={2} textAlign="justify">
          <List>
            <ListItem>
              <Link href="https://github.com/primaftr" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<GoMarkGithub />}
                >
                  primaftr
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/prima-fitra"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<BsLinkedin />}
                >
                  Prima Fitra
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/primafitra" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<BsTwitter />}
                >
                  @primafitra
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="mailto:primafitra.code@gmail.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<CgMail />}
                >
                  primafitra.code
                </Button>
              </Link>
            </ListItem>
          </List>
        </Box>
      </Section>
      {/* <Footer>
        <Text>Next ❤️ Chakra</Text>
      </Footer>
      <CTA /> */}
    </Layout>
  </>
);

export default Index;
