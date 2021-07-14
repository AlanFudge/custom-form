import React from 'react';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    const history = useHistory();

    const handleBack = (e) => {
        e.preventDefault();

        history.goBack();
    }

    const handleForward = (e) => {
        e.preventDefault();

        history.goForward();
    }

    return (
        <nav>
            <div onClick={handleBack} className='go-back'>
                <p>{`<`}</p>
            </div>
            <div onClick={handleForward} className='go-forward'>
                <p>{`>`}</p>
            </div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/forms'>Edit/View Forms</NavLink>
        </nav>
    )
}