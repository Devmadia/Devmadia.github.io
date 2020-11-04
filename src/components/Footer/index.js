import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="row">
                <div className="three columns">
                    <ul className="socstyle">
                    <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                    <li><a href="#"><i class="fab fa-github"></i></a></li> DEFAULT FOR ICONS
                    </ul>
                    <ul className="copyright">
                    <li><i class="far fa-copyright"></i> 2020 Devmadia </li>
                     
                    </ul>
                </div>
                <div id="go-top"><a className="smoothscroll" title="Take Me Home" href="#home"><i class="fas fa-broom"></i></a></div>
                </div>
            </footer>
        );
    }
}

export default Footer;