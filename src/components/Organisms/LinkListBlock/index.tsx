import React from 'react';
import styled from 'styled-components';
import { FaUserAlt, FaRegMap, FaRegFileAlt, FaPhoneAlt } from 'react-icons/fa';
import MenuItem from '../../Molecules/MenuItem';

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
    { id: 1, icon: <FaUserAlt />, body: 'About Me' },
    { id: 2, icon: <FaRegMap />, body: 'Portfolio' },
    { id: 3, icon: <FaRegFileAlt />, body: 'Resume' },
    { id: 4, icon: <FaPhoneAlt />, body: 'Contact' },
];

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: left;
    align-content: center;
`;
export default index;
