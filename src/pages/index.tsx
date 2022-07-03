import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";

import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

import { GoMarkGithub } from "react-icons/go";
import { Bio } from "../components/Bio";
import { Hero } from "../components/Hero";
import { Layout } from "../components/Layout";
import PortfolioSection from "../components/PortfolioSection";
import Section from "../components/Section";
import Skills from "../components/Skills";
import NextLink from "next/link";
import { ChocCarousel } from "../components/ChocCarousel";

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
          <Image
            borderRadius="full"
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            src="/image.jpg"
          />
        </Flex>
      </Box>

      <Section>
        <Box mt={2} textAlign="justify">
          I am an adept, passionate, and enthusiast learner. I have a high
          passion and dedication on full-stack web development. I'm a final year
          student in Riau University majoring on Computer Science. Currently im
          seeking for any opportunity to leverage my javascript fullstack
          skills, and also to improve my knowledge and experience on web
          developement.
        </Box>
      </Section>

      <Section id="skilss">
        <Heading as="h1" variant={"section-title"}>
          Skills
        </Heading>
        <Skills />
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
          Education
        </Heading>

        <Bio year="2010-2013">SMPN 32 Pekanbaru</Bio>
        <Bio year="2010-2013">SMAN 5 Pekanbaru</Bio>
        <Bio year="2016 to present"> Computer Science, Universitas Riau</Bio>
      </Section>

      <Section id="contacts" delay={0.6}>
        <Heading as="h1" variant={"section-title"}>
          Contacts
        </Heading>
        <Box>Let's work together. Get in touch with me :</Box>
        <Box mt={2} textAlign="justify">
          <List>
            <ListItem>
              <Link href="https://github.com/primexist" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<GoMarkGithub />}
                >
                  @PrimeXist
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="www.linkedin.com/in/prima-fitra" target="_blank">
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
              <Link href="https://instagram.com/PrimaFitraa" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<BsInstagram />}
                >
                  @PrimaFitraa
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
