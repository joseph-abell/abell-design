import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { Intro } from '../components/Intro';

interface MarkdownRemark {
    id: string;
    html: string;
    frontmatter: {
        title: string;
        keywords: {
            keyword: string;
        }[];
        images: any[];
    };
}

interface Data {
    markdownRemark: MarkdownRemark;
}

interface Props {
    data: Data;
}

const HomePage: FunctionComponent<Props> = ({
    data: {
        markdownRemark: {
            frontmatter: { title, keywords, images },
        },
    },
}) => {
    const keywordsString = keywords.map(k => k.keyword);

    console.log(images);

    return (
        <Layout>
            <SEO title={title} keywords={keywordsString} />
            <Intro />
        </Layout>
    );
};

export const query = graphql`
    query Home {
        markdownRemark(frontmatter: { title: { eq: "Home" } }) {
            frontmatter {
                images {
                    image
                }
                title
                keywords {
                    keyword
                }
            }
        }
    }
`;

export default HomePage;
