import Image from '../../Atoms/Image/Image';
import MainText from '../../Atoms/MainText/MainText';
import React from 'react';
import styled from 'styled-components';

interface TopImageParams {
    image: string;
    alt: string;
    title: string;
}

const TopHeader: React.FC<TopImageParams> = ({ image, alt, title }) => {
    return (
        <Container>
            <Image src={image} alt={alt} />
            <MainText text={title} />
        </Container>
    );
};

export default TopHeader;

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
