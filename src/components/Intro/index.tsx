import React, { FunctionComponent } from 'react';
import animateScrollTo from 'animated-scroll-to';
import {
    Container,
    BackgroundImage,
    ImageOverlay,
    Arrow,
    Data,
    Title,
} from './style';
import { Query } from './query';

export const Intro: FunctionComponent<{}> = () => {
    const scrollWindow = () => {
        const data = document.querySelector('.intro-data');
        if (data) {
            const windowScrollTop = window.scrollY || window.pageYOffset;
            const dataRect = data.getBoundingClientRect();

            animateScrollTo(dataRect.top + dataRect.height + windowScrollTop, {
                speed: 1000,
            });
        }
    };

    const timeoutBase = 500;

    return (
        <Query>
            {data => (
                <>
                    <Container>
                        <BackgroundImage
                            sizes={data.backgroundImage.childImageSharp.fluid}
                        />
                        <ImageOverlay />
                        <Data className="intro-data">
                            <Title
                                effect="fade-slide-bottom"
                                effectTimeout={timeoutBase}
                            >
                                Abell Design
                            </Title>
                        </Data>
                        <Arrow
                            effectTimeout={timeoutBase + 1500}
                            onClick={() => scrollWindow()}
                        />
                    </Container>
                </>
            )}
        </Query>
    );
};
