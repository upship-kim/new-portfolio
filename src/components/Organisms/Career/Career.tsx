import CareerItem from '../../Molecules/CareerItem/CareerItem';
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
                <Image src={pic} alt={'pic'} width={14} />
                <InfoBlock>
                    {careerData.map((item: any) => (
                        <CareerItem data={item} />
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
`;
const InfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 50%;
`;
