import React from 'react';
import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';

type ItemType = {
    icon: React.ReactNode;
};
export const Item = ({ icon }: ItemType) => {
    return <Style>{icon}</Style>;
};

export default function LinkIcon() {
    return (
        <List>
            <Item icon={<AiFillGithub />} />
            <Item icon={<SiGmail />} />
        </List>
    );
}
const List = styled.div`
    display: flex;
    flex-direction: row;
    margin: 2rem;
    justify-content: center;
`;
const Style = styled.div`
    display: flex;
    width: 2rem;
    justify-content: center;
    height: 2rem;
    padding: 2px 2px;
    align-items: center;
    border-radius: 100%;
    background: ${props => props.theme.iconBg};
    color: gray;
    cursor: pointer;
    & + & {
        margin-left: 1rem;
    }
`;
