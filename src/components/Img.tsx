import { Image } from "@chakra-ui/react";

const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
);

export default WorkImage;
