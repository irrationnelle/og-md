import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Button from 'material-ui/Button';

import Header from './Header';
import Footer from './Footer';
import Contents from './Contents';

import Scenario from './Scenario';
import CharList from './Character/CharList';
import MechList from './Mechanic/MechList';

const App = () => {
    return (
        <div>
            <Header />
            <div>
                <Switch>
                    <Route exact path="/" component={Scenario} />
                    <Route path="/characters" component={CharList} />
                    <Route path="/mechanics" component={MechList} />
                </Switch>
            </div>
            <Footer />
        </div>
    );
};

export default App;
