import {
  Text,
  Image,
  Box,
  Flex,
  Stack,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

import React, { useEffect, useState } from "react";

interface ChocCarouselProps {}

const arrowStyles = {
  cursor: "pointer",
  pos: "absolute",
  top: "50%",
  w: "auto",
  mt: "-22px",
  p: "16px",
  color: "white",
  fontWeight: "bold",
  fontSize: "18px",
  transition: "0.6s ease",
  borderRadius: "0 3px 3px 0",
  userSelect: "none",
  _hover: {
    opacity: 0.8,
    bg: "black",
  },
};

const slides = [
  {
    img: "/travel/laravel-thumb.jpg",
    label: "Travel GA",
    description: "Route optimization app using Genetic Algorithm ",
    link: "portfolio/travel-ga",
  },
  {
    img: "/stellar/stellar-thumb.jpg",
    label: "Stellar Bulk",
    description: "An app for merging stellar account in one click  ",
    link: "portfolio/stellar",
  },
  {
    img: "/lilpost/lilpost-thumb.jpg",
    label: "Lilpost",
    description: "Simplistic reddit version web using GraphQL",
    link: "portfolio/lilpost",
  },
];
export const ChocCarousel = ({}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [stopAuto, setStopAuto] = useState(false);
  const slidesCount = slides.length;
  const carouselHover = {
    ".carousel:hover &": {
      opacity: 1,
      color: useColorModeValue("black", "white"),
    },
  };
  useEffect(() => {
    if (!stopAuto) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [stopAuto]);

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };
  return (
    <Flex
      className="carousel"
      w="full"
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={1}
      alignItems="center"
      justifyContent="center"
      onMouseEnter={() => setStopAuto(true)}
      onMouseLeave={() => setStopAuto(false)}
    >
      <Flex w="full" pos="relative" overflow="hidden">
        <Flex w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <NextLink href={slide.link} key={`slide-${sid}`}>
              {/* <Link> */}
              <Box
                as={Link}
                key={`slide-${sid}`}
                boxSize="full"
                shadow="md"
                flex="none"
              >
                <Image
                  src={slide.img}
                  alt="carousel image"
                  boxSize="full"
                  backgroundSize="cover"
                  sx={{
                    ".carousel:hover &": {
                      opacity: 0.3,
                    },
                  }}
                />
                <Stack
                  p="8px 12px"
                  pos="absolute"
                  bottom="20px"
                  textAlign="center"
                  w="full"
                >
                  <Box
                    color={"blackAlpha.800"}
                    sx={{
                      ".carousel:hover &": {
                        opacity: 1,
                        color: "white",
                      },
                    }}
                  >
                    <Text sx={carouselHover} opacity={0} fontSize="2xl">
                      {slide.label}
                    </Text>
                    <Text sx={carouselHover} opacity={0} fontSize="lg">
                      {slide.description}
                    </Text>
                  </Box>
                </Stack>
              </Box>
              {/* </Link> */}
            </NextLink>
          ))}
        </Flex>
        <Text {...(arrowStyles as any)} left="0" onClick={prevSlide}>
          &#10094;
        </Text>
        <Text {...(arrowStyles as any)} right="0" onClick={nextSlide}>
          &#10095;
        </Text>
        <HStack justify="center" pos="absolute" bottom="8px" w="full">
          {Array.from({
            length: slidesCount,
          }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize={["7px", null, "7px"]}
              m="0 2px"
              bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{
                bg: "blackAlpha.800",
              }}
              onClick={() => setSlide(slide)}
            ></Box>
          ))}
        </HStack>
      </Flex>
    </Flex>
  );
};
