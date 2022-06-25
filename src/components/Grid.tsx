import { Image, LinkBox, Text, Box, LinkOverlay } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import NextLink from "next/link";
import React from "react";

interface gridProps {
  children?: any;
  href?: any;
  title?: any;
  thumbnail?: any;
  id?: any;
}

export const GridItem: React.FC<gridProps> = ({
  children,
  href,
  title,
  thumbnail,
}) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

export const PortoGridItem: React.FC<gridProps> = ({
  children,
  id,
  title,
  thumbnail,
}) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/portfolio/${id}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          rounded={15}
        />
        <LinkOverlay href={`/portfolio/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
        .grid-item-thumbnail {
          border-radius: 12px;
        }
      `}
  />
);
