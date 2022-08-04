import React from "react";
import { Layout } from "../components/Layout";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/Section";
import { PortoGridItem } from "../components/Grid";

interface portfolioProps {}

const Portfolio: React.FC<portfolioProps> = ({}) => {
  return (
    <Layout>
      <Heading as="h3" fontSize={20} mb={4}>
        Portfolio
      </Heading>

      <SimpleGrid mt={5} columns={[1, 1, 2]} gap={6}>
        <Section>
          <PortoGridItem
            id="travel-ga"
            title="Travel-GA"
            thumbnail={"../travel/laravel-thumb.jpg"}
          >
            An app for route optimization for <i>travel</i> (indonesian public
            transport) using <i>Genetic Algorithm</i>
          </PortoGridItem>
        </Section>
        <Section>
          <PortoGridItem
            id="lilpost"
            title="LilPost"
            thumbnail={"../lilpost/lilpost-thumb.jpg"}
          >
            A - reddit like - app with simple CRUD using TypeScript and ORM
          </PortoGridItem>
        </Section>

        <Section delay={0.1}>
          <PortoGridItem
            id="stellar"
            title="Stellar Bulk"
            thumbnail={"../stellar/stellar-thumb.jpg"}
          >
            An app for Stellar user to merge multiple account without pain in
            the neck
          </PortoGridItem>
        </Section>
        <Section delay={0.1}>
          <PortoGridItem
            id="uag-solution"
            thumbnail={"../uag/uag-thumb.jpg"}
            title="UAG Solution"
          >
            App to diagnose and repair your broken PC/Laptop using machine
            learning.
          </PortoGridItem>
        </Section>
      </SimpleGrid>
    </Layout>
  );
};

export default Portfolio;
