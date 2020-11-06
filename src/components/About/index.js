import React from 'react';

function About() {
        return (
            <section id="about">
                <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src="images/Agatha.gif" alt="animated logo" />
                </div>
                <div className="nine columns main-col">
                    <h2>About Me</h2>
                    <p>As a bit of a recluse, I prefer to go by the handle <span>Devmadia</span> for a variety of reasons. After all, <span>"a rose by any
                        other name would smell as sweet"</span> per William Shakespeare's famous line in <i>Romeo and Juliet</i>.

                        <br />My strong sense of empathy permits me to engage with others in a way that promotes team synergy. A useful trait in professional 
                        environments since my flexible nature enables me to swap roles as needed. 

                        <br />I recently completed a six month course for a certification in <span>full stack web development</span> through the University of Texas at Austin
                        though I also hold a bachelor's in <span>English</span> with a minor in <span>Journalism</span> from Texas A&M University -- Corpus Christi.

                    </p>
                    <div className="row">
                    <div className="columns contact-details">
                        <h2>Details</h2>
                        <p className="address">
                        <span>Devmadia</span><br />
                        <span>(918) 324-6891</span><br />
                        <span>thedevmadia@gmail.com</span>
                        </p>
                    </div>
                    <div className="columns download">
                        <p>
                        <a href="https://devmadia.github.io/images/Devmadia.pdf" className="button"><i className="fa fa-download" />Download Resume</a>
                        </p>
                    </div>
                    </div> {/* end row */}
                </div> {/* end .main-col */}
                </div>
            </section>
        );
}


export default About;