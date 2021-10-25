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
            <HeaderRow>
                <Block style={{ justifyContent: 'flex-start' }}>
                    <MainText text={'upship-kim'} />
                </Block>
                <Block>
                    <Image src={image} alt={alt} />
                </Block>

                <Block style={{ justifyContent: 'flex-end' }}>
                    <MainText text={'(깃허브 연동 & 다크모드)'} />
                </Block>
            </HeaderRow>
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
const HeaderRow = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;
const Block = styled.div`
    width: 33%;
    display: flex;
    justify-content: center;
`;
