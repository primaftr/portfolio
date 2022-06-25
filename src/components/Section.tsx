import React from "react";
import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});
interface SectionProp {
  id?: string;
  children?: any;
  delay?: number;
}
const defaultProps: SectionProp = {
  delay: 0,
};

const Section: React.FC<SectionProp> = (props) => {
  return (
    <StyledDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: "0.8", delay: props.delay } as any}
      mb={6}
      id={props.id}
    >
      {props.children}
    </StyledDiv>
  );
};

export default Section;
