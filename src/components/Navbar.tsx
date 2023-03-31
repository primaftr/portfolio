import { ExternalLinkIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import LinkItem from "next/link";
import NextLink from "next/link";
import { GoMarkGithub } from "react-icons/go";
import { DarkModeSwitch } from "./DarkModeSwitch";

export default function Nav() {
  return (
    <>
      <Box
        position={"sticky"}
        zIndex="sticky"
        alignItems={"center"}
        top={0}
        px={4}
        py={2}
        css={{ backdropFilter: "blur(10px)" }}
        bg={useColorModeValue("#FEEBC840", "#2D374880")}
      >
        <Flex
          flex={1}
          maxW={800}
          m="auto"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Flex mr="3">
            <LinkItem href={"/"}>
              <Link _hover={{ textDecoration: "none" }}>
                <Image
                  src={useColorModeValue("/light-logo.png", "/logo.png")}
                  maxW={"2em"}
                ></Image>
              </Link>
            </LinkItem>
          </Flex>
          <Flex mr={1}>|</Flex>
          <Stack
            direction={{ base: "column", md: "row" }}
            display={{ base: "none", md: "flex" }}
            width={{ base: "full", md: "auto" }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
          >
            <LinkItem href="/portfolio">
              <Link>Portfolio</Link>
            </LinkItem>
            <LinkItem href="https://github.com/primaftr/portfolio">
              <Link href="https://github.com/primaftr/portfolio">
                <ExternalLinkIcon
                  // variant="unstyled"
                  // aria-label="github"
                  as={GoMarkGithub}
                  mr="1"
                />
                Source
              </Link>
            </LinkItem>
          </Stack>

          <Box alignSelf="right" ml="auto">
            <Box ml={2} display={{ base: "inline-block", md: "none" }}>
              <DarkModeSwitch />

              <Menu>
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant="outline"
                  aria-label="options"
                ></MenuButton>
                <MenuList>
                  <Link>
                    <NextLink href="/portfolio" passHref>
                      <MenuItem>Portfolio</MenuItem>
                    </NextLink>
                  </Link>

                  <Link>
                    <NextLink
                      href="https://github.com/primaftr/portfolio"
                      passHref
                    >
                      <MenuItem>
                        <ExternalLinkIcon as={GoMarkGithub} mr="1" />
                        Source
                      </MenuItem>
                    </NextLink>
                  </Link>
                </MenuList>
              </Menu>
            </Box>
          </Box>
          <Flex
            alignItems={"center"}
            display={{ base: "none", md: "inline-block" }}
          >
            <DarkModeSwitch />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
