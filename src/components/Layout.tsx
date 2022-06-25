import { Container } from "../components/Container";
import React from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: any;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
};
