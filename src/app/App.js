import React from 'react';
import FormList from '../features/forms/formList';
import Form from '../features/forms/form';
import NewSectionForm from '../components/newSectionForm';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path='/forms/:formId'>
                    <h1>Here is the form</h1>
                    <Form />
                </Route>
                <Route path='/forms'>
                    <h1>Here is the list of forms</h1>
                    <FormList />
                </Route>
                <Route path='/'>
                    <Redirect to='/forms' />
                </Route>
            </Switch>
        </Router>
    );
}