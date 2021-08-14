import React from 'react';
import styled from 'styled-components';

type menuItemType = {
    icon: React.ReactNode;
    body: string;
    url?: string;
};

export const index = ({ icon, body, url }: menuItemType) => {
    return (
        <Item>
            <div>{icon}</div>
            <div>{body}</div>
        </Item>
    );
};

const Item = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.5rem 0rem 0.5rem 2.5rem;
    height: 2rem;
    cursor: pointer;
    font-weight: 700;
    div {
        margin-right: 1rem;
    }
    &:hover {
        background: ${props => props.theme.bg};
        color: ${props => props.theme.text};
    }
    &:active {
        border-left: 0.4rem solid blue;
    }
`;
export default index;
