
import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import HomePage from '../pages/homepage';
import HomePage_ from '../pages/homepage/Homepage_old';
import AboutPage from '../pages/footerpage/AboutPage';
import FAQPage from '../pages/footerpage/FAQPage';
import TermsPage from '../pages/footerpage/TermsPage';
import PrivacyPage from '../pages/footerpage/PrivacyPage';
import BloodlinePage from '../pages/footerpage/BloodlinePage';

export const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Switch>
                <Route path='/' component={HomePage} exact={true} />
                <Route path='/about' component={AboutPage} exact={true} />
                <Route path='/faq' component={FAQPage} exact={true} />
                <Route path='/terms' component={TermsPage} exact={true} />
                <Route path='/privacy' component={PrivacyPage} exact={true} />
                <Route path='/bloodline' component={BloodlinePage} exact={true} />
                <Route path='/old' component={HomePage_} exact={true} />
                <Redirect to="/" />
            </Switch>
        </Fragment>
    </BrowserRouter>
);