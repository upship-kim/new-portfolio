import React from 'react';
import styled from 'styled-components';
import pic from '../../../asset/picture/IMG_0221.jpg';
import LinkIcon from '../Profile/LinkIcon';
const index = () => {
    return (
        <Container>
            <h3>
                <strong>SangBae Kim</strong>
            </h3>
            <img src={pic} alt="picture_Profile" />
            <Intro>
                더 나은 내일을 지향하는
                <br />
                프론트엔드 개발자
                <br />
                김상배 입니다.
            </Intro>
            <LinkIcon />
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
const Intro = styled.p`
    font-size: 0.9rem;
    margin: 1rem;
    text-align: center;
`;

export default index;
