import React from 'react';
import styled from 'styled-components';

interface MainTextArgs {
    text: string;
}

const MainText = ({ text }: MainTextArgs) => {
    return <Styled>{text}</Styled>;
};
const Styled = styled.h2`
    margin: 2rem 0;
    color: ${props => props.theme.text};
`;
export default MainText;
