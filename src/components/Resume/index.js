import React from 'react';

function Resume() {
        return (
            <section id="resume">
                {/* Education */}
                <div className="row education">
                    <div className="three columns header-col"><h1><span>Education</span></h1></div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>University of Texas at Austin</h3>
                                <p className="info">Full Stack Web Development <span>•</span> <em className="date">November 2020</em></p>
                                <p>
                                Six month, full-time coursework dedicated to designing and building web application.<br />
                                Skills Learned: JavaScript, jQuery, Node.js, Express.js, HTML5/CSS3, C#/ASP.NET, Bootstrap, Git, Handlebars.js, 
                                React.js, Responsive Design, API/JSON, RESTful API, Firebase, MySQL, Ajax, State Management, Active Record and Command Line.
                                </p>
                            </div>
                        </div> {/* item end */}

                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Texas A&M University -- Corpus Christi</h3>
                                <p className="info">B.A. English with minor concentration in Journalism <span>•</span> <em className="date">May 2010</em></p>
                                <p>
                                Though I hold a bachelor's in English, I also received three years of undergraduate Biology and Field Research education during
                                my time at the "Island University".
                                </p>
                            </div>
                        </div> {/* item end */}
                    </div> {/* main-col end */}
                </div> {/* End Education */}

                {/* Work]*/}
                    {/* <div className="row work">
                    <div className="three columns header-col"><h1><span>Work</span></h1></div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3></h3>
                                <p className="info">Senior UX Designer <span>•</span> <em className="date">March 2010 - Present</em></p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.</p>
                                
                            </div>
                        </div> {/* item end */}
                        {/* <div className="row item">
                            <div className="twelve columns">
                                <h3>Super Cool Studio</h3>
                                <p className="info">UX Designer <span>•</span> <em className="date">March 2007 - February 2010</em></p>
                                <p>
                                This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                                Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                                nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                                ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat
                                </p>
                            </div> */}
                        {/* </div> item end */}
                    {/* </div> main-col end */}
                {/* </div> End Work */}

                {/* Skills */}
                    {/* <div className="row skill">
                        <div className="three columns header-col">
                            <h1><span>Skills</span></h1>
                        </div>
                        
                        <div className="nine columns main-col">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt.</p>
                            
                            <div className="bars">
                                <ul className="skills">
                                    <li><span className="bar-expand wordpress" /><em>HTML/CSS</em></li>
                                    <li><span className="bar-expand css" /><em>Node</em></li>
                                    <li><span className="bar-expand html5" /><em>Express</em></li>
                                    <li><span className="bar-expand jquery" /><em>MySQL</em></li>
                                </ul> */}
                            {/* </div>end skill-bars */}
                        {/* </div> main-col end */}
                    {/* </div> End skills */}
            </section>
        );
}


export default Resume;