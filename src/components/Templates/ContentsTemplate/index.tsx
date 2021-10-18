import { Route, Switch } from 'react-router-dom';

import Contact from '../../../pages/Contact';
import Home from '../../../pages/Home';
import Portfolio from '../../../pages/Portfolio';
import React from 'react';
import Resume from '../../../pages/Resume';
import styled from 'styled-components';

const index = () => {
    return <Home />;
};

const Container = styled.div`
    display: flex;
    flex: 4;
    background: ${props => props.theme.bg};
    padding: 2rem;
    background: red;
`;
export default index;
