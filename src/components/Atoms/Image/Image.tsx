import React from 'react';
import styled from 'styled-components';
interface ImageProps {
    src: string;
    alt: string;
}
const Image: React.FC<ImageProps> = ({ src, alt }) => {
    return <ImageStyled src={src} alt={alt} />;
};

export default Image;

const ImageStyled = styled.img`
    width: 5rem;
`;
