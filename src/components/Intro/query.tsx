import React, { FunctionComponent } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { QueryProps } from '../../type';

const query = graphql`
    query HeaderImage {
        backgroundImage: file(
            relativePath: {
                eq: "grace_abell_york__freelance_graphic_designer_2_ski_national_geographic-1.jpg"
            }
        ) {
            childImageSharp {
                fluid(maxWidth: 1240, quality: 80) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`;

export const Query: FunctionComponent<QueryProps> = ({ children }) => {
    return <StaticQuery query={query} render={data => children(data)} />;
};
