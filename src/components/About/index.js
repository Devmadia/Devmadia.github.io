import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src="images/Agatha.gif" alt="animated logo" />
                </div>
                <div className="nine columns main-col">
                    <h2>About Me</h2>
                    <p>Frightened people. Give me a Dalek any day. I never know why. I only know who. Thank you, Strax. 
                        And if I'm ever in need of advice from a psychotic potato dwarf, you'll certainly be the first to know. 
                        Usually called 'The Doctor.' Or 'The Caretaker.' Or 'Get off this planet.' Though, strictly speaking, 
                        that probably isn't a name. There are fixed points throughout time where things must stay exactly the 
                        way they are. This is not one of them. This is an opportunity! Whatever happens here will create its 
                        own timeline, its own reality, a temporal tipping point. The future revolves around you, here, now, so do good!
                    </p>
                    <div className="row">
                    <div className="columns contact-details">
                        <h2>Reach Me </h2>
                        <p className="address">
                        <span>Devmadia</span><br />
                        <span>(918) 324-6891</span><br />
                        <span>thedevmadia@gmail.com</span>
                        </p>
                    </div>
                    <div className="columns download">
                        <p>
                        <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                        </p>
                    </div>
                    </div> {/* end row */}
                </div> {/* end .main-col */}
                </div>
            </section>
        );
    }
}

export default About;