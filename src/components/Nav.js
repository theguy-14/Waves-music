import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import logo from '../logo.png'

const Nav = ({libraryStatus, setLibraryStatus}) => {
    return(
        <div className="nav">
            <h1>
            <img src={logo} alt="Waves Logo" className="logo" />
            Waves
            </h1>
            <button onClick={() => setLibraryStatus(!libraryStatus)}>
                Library
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </div>
    );
};

export default Nav;