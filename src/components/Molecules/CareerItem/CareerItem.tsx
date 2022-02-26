import React from 'react';
import styled from 'styled-components';
interface CareerArgs {
    data: CareerTypes;
}
export type CareerTypes = {
    id: number;
    title: string;
    date: string;
    role: string;
};
const CareerItem = ({ data }: CareerArgs) => {
    const { date, role, title } = data;
    return (
        <Container>
            <Title>{title}</Title>
            <SubText>{date}</SubText>
            <SubText>{role}</SubText>
        </Container>
    );
};

export default CareerItem;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;
    justify-content: flex-start;
`;
const Title = styled.h3`
    margin: 10px 0px;
    border-bottom: 1px solid gray;
`;
const SubText = styled.li`
    padding-left: 6px;
    list-style: square;
`;
