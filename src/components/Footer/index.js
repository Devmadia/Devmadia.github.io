import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="row">
                <div className="twelve columns">
                    <ul className="socstyle">
                    <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                    <li><a href="https://github.com/Devmadia"><i class="fa fa-github-square"></i></a></li>
                    </ul>
                    <ul className="copyright">
                    <li><i class="far fa-copyright"></i> 2020 Devmadia </li>
                     
                    </ul>
                </div>
                <div id="go-top"><a className="smoothscroll" title="Take Me Home" href="#home"><i class="fa fa-chevron-circle-up"></i></a></div>
                </div>
            </footer>
        );
    }
}

export default Footer;