import { Text, Image, Box, Flex, Stack, HStack } from "@chakra-ui/react";

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
    img: "/travel/travel-1.jpg",
    label: "First Slide",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    img: "/travel/travel-2.png",
    label: "First Slide",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    img: "/travel/travel-3.png",
    label: "First Slide",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
];
export const ChocCarousel = ({}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [stopAuto, setStopAuto] = useState(false);
  const slidesCount = slides.length;
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
            <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
              <Text
                color="white"
                fontSize="xs"
                p="8px 12px"
                pos="absolute"
                top="0"
              ></Text>
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
                bottom="24px"
                textAlign="center"
                w="full"
                mb="8"
                color="white"
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
                  <Text fontSize="2xl">{slide.label}</Text>
                  <Text fontSize="lg">{slide.description}</Text>
                </Box>
              </Stack>
            </Box>
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
              boxSize={["7px", null, "15px"]}
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
