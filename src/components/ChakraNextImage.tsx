import { Box, BoxProps } from "@chakra-ui/react";
import Image from "next/image";

const ChakraNextImage = ({
  src,
  alt,
  maxW,
  h,
  w,
  ...rest
}: { src: string; alt: string } & Omit<BoxProps, "as">) => {
  return (
    <Box position="relative" {...rest} h={h} w={w} overflow="hidden">
      <Image
        objectFit="cover"
        src={src}
        alt={alt}
        sizes={`max-width:${maxW}`}
        height={h as string}
        width={w as string}
      />
    </Box>
  );
};

export default ChakraNextImage;
