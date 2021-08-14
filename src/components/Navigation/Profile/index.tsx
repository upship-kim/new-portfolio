import React from 'react';
import styled from 'styled-components';

const index = () => {
    return (
        <Container>
            <strong>SangBae Kim</strong>
            <div>사진</div>
            <div>간략 소개</div>
            <div>아이콘 연결 링크</div>
        </Container>
    );
};

const Container = styled.div`
    text-align: center;
    align-content: center;
`;

export default index;
