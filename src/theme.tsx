import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints, mode } from "@chakra-ui/theme-tools";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#f0e7db", "#202023")(props),
    },
  }),
};

const theme = extendTheme({
  components: {
    Badge: {
      colors: {
        default: "teal",
        _dark: "purple",
      },
    },
    Heading: {
      variants: {
        "section-title": {
          textDecoration: "underline",
          fontSize: 20,
          textUnderlineOffset: 6,
          marginTop: 3,
          marginBottom: 4,
        },
      },
    },
  },
  semanticTokens: {
    colors: {
      badge: {
        default: "teal",
        _dark: "purple",
      },
      text: {
        default: "#16161D",
        _dark: "#ade3b8",
      },
      heroGradientStart: {
        default: "#7928CA",
        _dark: "#e3a7f9",
      },
      mySwiper: {
        default: "#purple",
      },
      heroGradientEnd: {
        default: "#FF0080",
        _dark: "#fbec8f",
      },
    },
    radii: {
      button: "12px",
    },
  },
  colors: {
    black: "#16161D",
  },
  fonts,
  breakpoints,
  styles,
});

export default theme;
