import React from 'react';

function Nav() {

    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/">
                    Agatha "Devmadia" Bernal
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">About</a>
                    </li>
                    <li className="mx-2">
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li className="mx-2">
                        <a href="#contact">Reach Me</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;