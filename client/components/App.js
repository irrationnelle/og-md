import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Button from 'material-ui/Button';

import Header from './Header';
import Footer from './Footer';
import Contents from './Contents';
import CharList from './Character/CharList';
import MechList from './Mechanic/MechList';

export default (props) => {
    return (
        <div>
            <Header />
            <div>
                <Switch>
                    <Route exact path="/" component={Contents} />
                    <Route path="/characters" component={CharList} />
                    <Route path="/mechanics" component={MechList} />
                </Switch>
            </div>
            <Footer />
        </div>
    );
};