import React from 'react';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import backButton from '../img/Back-Button.png';
import forwardButton from '../img/Forward-Button.png';

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
        <nav className='navbar'>
            <div onClick={handleBack} className='go-back'>
                <img src={backButton}></img>
            </div>
            <div onClick={handleForward} className='go-forward'>
                <img src={forwardButton}></img>
            </div>
            <NavLink to='/' activeClassName='active-link' exact>Home</NavLink>
            <NavLink to='/forms' activeClassName='active-link' exact>Edit/View Forms</NavLink>
        </nav>
    )
}