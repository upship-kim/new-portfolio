import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

type menuItemType = {
    icon: React.ReactNode;
    body: string;
    url?: string;
};

export const index = ({ icon, body, url }: menuItemType) => {
    return (
        <Item to={`/${url}`} exact={url === ''}>
            <div>{icon}</div>
            <div>{body}</div>
        </Item>
    );
};

const Item = styled(NavLink)`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.5rem 0rem 0.5rem 2.5rem;
    height: 2rem;
    cursor: pointer;
    font-weight: 700;
    color: ${props => props.theme.navText};
    text-decoration: none;
    div {
        margin-right: 1rem;
    }
    &:hover {
        background: ${props => props.theme.bg};
        color: ${props => props.theme.text};
    }
    &.active {
        background: ${props => props.theme.bg};
        color: ${props => props.theme.text};
        border-left: 0.4rem solid violet;
        padding: 0.5rem 0rem 0.5rem 2.1rem;
        border-radius: 2px;
    }
`;
export default index;
