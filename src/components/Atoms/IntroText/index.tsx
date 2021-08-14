import React from 'react';
import styled from 'styled-components';

const index: React.FC = ({ children }) => {
    return <Styled>{children}</Styled>;
};
const Styled = styled.p`
    font-size: 0.9rem;
    margin: 1rem;
    text-align: center;
`;
export default index;
