import React from 'react';
import styled from 'styled-components';
import pic from '../../../asset/picture/IMG_0221.jpg';
import IntroText from '../../Atoms/IntroText';
import ProfileLinkIconList from '../../Molecules/ProfileLinkIconList';

const index = () => {
    return (
        <Container>
            <h3>
                <strong>SangBae Kim</strong>
            </h3>
            <img src={pic} alt="picture_Profile" />
            <IntroText>
                더 나은 내일을 지향하는
                <br />
                프론트엔드 개발자
                <br />
                김상배 입니다.
            </IntroText>
            <ProfileLinkIconList />
        </Container>
    );
};

const Container = styled.div`
    text-align: center;
    align-content: center;
    img {
        width: 8rem;
        border-radius: 100%;
    }
`;

export default index;
