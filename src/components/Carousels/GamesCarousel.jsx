/**
 * Carousel for food pictures
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import GeneralCarousel from "components/Carousels/GeneralCarousel";

const GamesCarousel = (props) => {
    const data = useStaticQuery(graphql`
    query {
        allFile(filter: {
            extension: {regex: "/(jpg)|(jpeg)|(png)/"}, 
            relativeDirectory: {eq: "games"}
        }) {
          edges {
            node {
              id
              childImageSharp {
                fluid(maxWidth: 500, maxHeight: 500) {
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      
    `);

    const items = data.allFile.edges.map(item => {
        return {
            key: item.node.childImageSharp.id,
            fluid: item.node.childImageSharp.fluid,
        };
    });

    return (
        <GeneralCarousel id="games-carousel" items={items} title="Games" />
    );
}

export default GamesCarousel;