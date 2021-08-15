import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Contact from '../../../pages/Contact';
import Home from '../../../pages/Home';
import Portfolio from '../../../pages/Portfolio';
import Resume from '../../../pages/Resume';
const index = () => {
    return (
        <Container>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/contact" component={Contact} />
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
