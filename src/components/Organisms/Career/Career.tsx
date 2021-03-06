import CareerItem, { CareerTypes } from '../../Molecules/CareerItem/CareerItem';
import ContentWrapper from '../../Atoms/ContentWrapper/ContentWrapper';
import Image from '../../Atoms/Image/Image';
import React from 'react';
import { careerData } from '../../../data/dataForm';
import pic from '../../../asset/picture/pic_profile.jpg';
import styled from 'styled-components';

const Career = () => {
    return (
        <ContentWrapper>
            <Container>
                <Image src={pic} alt={'pic'} width={15} />
                <InfoBlock>
                    {careerData.map((item: CareerTypes) => (
                        <CareerItem key={item.id} data={item} />
                    ))}
                </InfoBlock>
            </Container>
        </ContentWrapper>
    );
};

export default Career;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;
const InfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 80%;
    overflow: auto;
    width: 50%;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;
