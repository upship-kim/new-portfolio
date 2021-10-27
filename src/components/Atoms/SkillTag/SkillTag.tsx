import React from 'react';
import styled from 'styled-components';

interface SkillTagArgs {
    text: string;
}

const SkillTag = ({ text }: SkillTagArgs) => {
    return <Container>{text}</Container>;
};

export default SkillTag;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 2rem; */
    height: 1rem;
    padding: 8px 1rem;
    color: ${props => props.theme.skillTag};
    border: 1px solid ${props => props.theme.skillTag};
    margin-right: 1rem;
    font-weight: 700;
`;
