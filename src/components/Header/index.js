import React from 'react';

function Header() {
        return (
            <header id="home">
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                    <ul id="nav" className="nav">
                    <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                    <li><a className="smoothscroll" href="#about">About</a></li>
                    <li><a className="smoothscroll" href="#resume">Resume</a></li>
                    <li><a className="smoothscroll" href="#portfolio">Work</a></li>
                    <li><a className="smoothscroll" href="#contact">Contact</a></li>
                    </ul> {/* end #nav */}
                </nav> {/* end #nav-wrap */}
                <div className="row banner">
                    <div className="banner-text">
                    <h1 className="responsive-headline">I'm Devmadia.</h1>
                    <hr />
                    <h3>A full stack <span>web developer</span>, <span>writer</span> and <span>gamer</span> with a love of cultivating carnivorous plants. 
                        Feel free to <a className="smoothscroll" href="#portfolio">explore </a> a bit and learn <a className="smoothscroll" href="#about">about
                         me</a> as you go!</h3>
                    <hr />
                    </div>
                </div>
                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="fa fa-chevron-circle-down"></i></a>
                </p>
            </header>
        );
}

export default Header;