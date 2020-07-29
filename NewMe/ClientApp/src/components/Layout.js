import React from 'react';
import NavMenu from './NavMenu';
import Home from './Home';
import { Container } from 'reactstrap';
import { Route } from 'react-router';

export default function Layout() {
    return (
        <div>
            <NavMenu />
            <Container>
                <Route exact path='/' component={Home} />
            </Container>
        </div>
    );
}
