import React from 'react';
import styled from 'styled-components';

interface MenuTagArgs {
    item: {
        tagText: string;
        id: number;
    };
    activeTag: boolean;
    onClick: (id: number) => void;
}

export const MenuTag = ({ item, activeTag, onClick }: MenuTagArgs) => {
    return (
        <Item
            className={activeTag ? 'active' : 'none'}
            onClick={() => onClick(item.id)}
        >
            <div>{item.tagText}</div>
        </Item>
    );
};

const Item = styled.div`
    display: flex;
    align-items: center;
    padding: 0.2rem 0.8rem;
    justify-content: center;
    cursor: pointer;
    font-weight: 700;
    color: ${props => props.theme.text};
    text-decoration: none;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.bg};

    &:hover {
        background: ${props => props.theme.tagBg};
        color: ${props => props.theme.text};
        border: 1px solid ${props => props.theme.activeTag};
    }
    &.active {
        background: ${props => props.theme.tagBg};
        color: ${props => props.theme.activeTag};
        border: 1px solid ${props => props.theme.activeTag};
    }
    & + & {
        margin: 0 1rem;
    }
`;
export default MenuTag;
