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
            thumbnail={"../laravel-thumb.jpg"}
          >
            An app for route optimization for <i>travel</i> (indonesian public
            transport) using <i>Genetic Algorithm</i>
          </PortoGridItem>
        </Section>
        <Section>
          <PortoGridItem
            id="lilpost"
            title="LilPost"
            thumbnail={"../laravel-thumb.jpg"}
          >
            A - reddit like - simple app with simple CRUD
          </PortoGridItem>
        </Section>

        <Section delay={0.1}>
          <PortoGridItem
            id="stellar"
            title="Stellar Bulk"
            thumbnail={"../laravel-thumb.jpg"}
          >
            An app for Stellar user to merge multiple account without pain in
            the neck
          </PortoGridItem>
        </Section>
        <Section delay={0.1}>
          <PortoGridItem
            id="menkiki"
            thumbnail={"../laravel-thumb.jpg"}
            title="Menkiki"
          >
            An app that suggests ramen(noodle) shops based on a given photo of
            the ramen you want to eat
          </PortoGridItem>
        </Section>
      </SimpleGrid>
    </Layout>
  );
};

export default Portfolio;
