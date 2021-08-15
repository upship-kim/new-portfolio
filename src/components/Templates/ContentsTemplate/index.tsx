import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Home from '../../../pages/Home';
import Portfolio from '../../../pages/Portfolio';
const index = () => {
    return (
        <Container>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/portfolio" component={Portfolio} />
            </Switch>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex: 4;
    background: ${props => props.theme.bg};
    padding: 2rem;
`;
export default index;
