import { ArrowRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  Progress,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";

import { GoMarkGithub } from "react-icons/go";
import { Bio } from "../components/Bio";
import { Hero } from "../components/Hero";
import { Layout } from "../components/Layout";
import Section from "../components/Section";
import Skills from "../components/Skills";

const Index = () => (
  <>
    <Layout>
      <Box>
        <Heading as={"h2"} variant="page-title">
          Hello! I am
        </Heading>
      </Box>
      <Box display={{ md: "flex" }} my="2">
        <Box borderRadius={"lg"} p={3} mx={5} flexGrow={1}>
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
      <Flex my={5} justifyContent={"center"}>
        <NextLink href={"/portfolio"}>
          <Button>
            My Portfolio
            <ArrowRightIcon ml={2} />
          </Button>
        </NextLink>
      </Flex>

      <Section id="skilss">
        <Heading as="h1" variant={"section-title"}>
          Skills
        </Heading>
        <Skills />
      </Section>
      <Section id="bio" delay={0.4}>
        <Heading as="h1" variant={"section-title"}>
          Bio
        </Heading>
        <Bio year="1999">Born in Tangerang, Jakarta</Bio>
        <Bio year="2010-2013">SMPN 32 Pekanbaru</Bio>
        <Bio year="2010-2013">SMAN 5 Pekanbaru</Bio>
        <Bio year="2016 to present"> Universitas Riau</Bio>
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
