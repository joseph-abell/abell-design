import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { Intro } from '../components/Intro';

import { FontSize } from '../type';
import { EffectsSupported } from '../lib/effects';

interface Graphics {
    source?: string;
    author?: string;
    image: any;
}

interface Node {
    id: string;
    html: string;
    frontmatter: {
        graphics: Graphics[];
        widget: 'StandardBlock' | 'AccentBlock' | 'QuoteBlock';
        fontSize: FontSize;
        effect?: EffectsSupported;
        effectTimeout?: number;
    };
}

interface Data {
    allMarkdownRemark: {
        nodes: Node[];
    };
}

interface Props {
    data: Data;
}

const HomePage: FunctionComponent<Props> = () => {
    return (
        <Layout>
            <SEO title="Home" keywords={['Design', 'York', 'Graphic Design']} />
            <Intro />
        </Layout>
    );
};

export const query = graphql`
    query HomePageQuery {
        allMarkdownRemark(sort: { fields: frontmatter___sort, order: ASC }) {
            nodes {
                id
                html
                frontmatter {
                    graphics {
                        author
                        source
                        sourceText
                    }
                    widget
                    fontSize
                    effect
                    effectTimeout
                }
            }
        }
    }
`;

export default HomePage;
