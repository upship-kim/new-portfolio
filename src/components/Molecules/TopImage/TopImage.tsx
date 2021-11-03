import { BsGithub } from 'react-icons/bs';
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
                <Block className="left">
                    <MainText text={'upship-kim'} />
                </Block>
                <Block>
                    <Image src={image} alt={alt} />
                </Block>

                <Block className="right">
                    <a href={'https://github.com/upship-kim'}>
                        <BsGithub color={'gray'} size={30} />
                    </a>
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
    @media screen and (max-width: 768px) {
        padding: 0 0.4rem;
        width: 90%;
        h2 {
            font-size: 1rem;
        }
    }
`;
const HeaderRow = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    .left {
        @media screen and (max-width: 768px) {
            display: none;
        }
        justify-content: flex-start;
    }
    .right {
        justify-content: flex-end;
    }
`;
const Block = styled.div`
    width: 33%;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 768px) {
        justify-content: flex-start;
    }
`;
