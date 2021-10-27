import React from 'react';
import styled from 'styled-components';

interface ImageProps {
    src: string;
    alt: string;
    width?: number;
    round?: boolean;
}
const Image: React.FC<ImageProps> = ({ src, alt, width, round }) => {
    if (round) {
        return (
            <ImageRoundStyled
                src={src}
                alt={alt}
                style={{ width: `${width}rem` }}
            />
        );
    } else {
        return (
            <ImageStyled src={src} alt={alt} style={{ width: `${width}rem` }} />
        );
    }
};

export default Image;

const ImageRoundStyled = styled.img`
    width: 5rem;
    border-radius: 10rem;
`;

const ImageStyled = styled.img`
    width: 5rem;
`;
