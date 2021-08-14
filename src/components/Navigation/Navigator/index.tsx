import React from 'react';
import styled from 'styled-components';
import { FaUserAlt } from 'react-icons/fa';
type menuItemType = {
    icon: React.ReactNode;
    body: string;
    url?: string;
};
const index = () => {
    return (
        <Container>
            {data &&
                data.map(i => (
                    <MenuItem key={i.id} icon={i.icon} body={i.body} />
                ))}
        </Container>
    );
};

const data = [
    { id: 1, icon: <FaUserAlt />, body: 'Profile' },
    { id: 2, icon: <FaUserAlt />, body: 'Profile' },
    { id: 3, icon: <FaUserAlt />, body: 'Profile' },
];
export const MenuItem = ({ icon, body, url }: menuItemType) => {
    return (
        <Item>
            <div>{icon}</div>
            <div>{body}</div>
        </Item>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: left;
    align-content: center;
    background: green;
`;
const Item = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.5rem 0rem 0.5rem 2.5rem;
    height: 2rem;
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
