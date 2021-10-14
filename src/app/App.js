import React from 'react';
import FormList from '../features/forms/formList';
import Form from '../features/forms/form';
import DisplayForm from '../features/forms/displayForm';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ResponseSucess from '../components/responseSuccess';
import ResponseList from '../features/responses/responseList';
import NavBar from '../components/navBar';

import '../sass/main.scss';

export default function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path='/forms/:formId/responses'>
                    <ResponseList />
                </Route>
                <Route path='/forms/:formId'>
                    <Form />
                </Route>
                <Route path='/forms'>
                    <FormList />
                </Route>
                <Route path='/form-success'>
                    <ResponseSucess />
                </Route>
                <Route path='/:formId'>
                    <DisplayForm />
                </Route>
                <Route path='/'>
                    <Redirect to='/forms' />
                </Route>
            </Switch>
        </Router>
    );
}