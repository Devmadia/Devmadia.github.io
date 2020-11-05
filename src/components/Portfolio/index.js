import React from 'react';

function Portfolio() {
        return (
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">

                        <h1>Projects</h1>

                        {/* portfolio-wrap */}
                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-1" title>
                                    <img alt="I'll Be Honest" src="images/portfolio/ill-be-honest.png" />
                                        <div className="overlay">
                                            <div className="portfolio-name">
                                                <h5>I'll Be Honest</h5>
                                                <p>MySQL, Handlebars, Sass, ExpressJs</p>
                                            </div>
                                        </div>
                                    <div className="icon-link"><i className="icon-plus" /></div>
                                    </a>
                                </div>
                            </div> 

                            {/* item end */}

                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-2" title>
                                        <img alt="" src="images/portfolio/sootheR02.png" />
                                        <div className="overlay">
                                            <div className="portfolio-name">
                                                <h5>sootheR</h5>
                                                <p>HTML, CSS, JS</p>
                                            </div>
                                        </div>
                                        <div className="icon-link"><i className="icon-plus" /></div>
                                    </a>
                                </div>
                            </div> 
                            
                            {/* item end */}

                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-3" title>
                                        <img alt="Gist Regex Tutorial" src="images/portfolio/RegexTutorial.png" />
                                        <div className="overlay">
                                            <div className="portfolio-name">
                                                <h5>Regex Tutorial</h5>
                                                <p>GitHub Gist</p>
                                            </div>
                                        </div>
                                        <div className="icon-link"><i className="icon-plus" /></div>
                                    </a>
                                </div>
                            </div> 
                            
                            {/* item end */}

                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-4" title>
                                        <img alt="Red Cat & Co" src="images/portfolio/RedCatCo.png" />
                                        <div className="overlay">
                                            <div className="portfolio-name">
                                                <h5>Red Cat & Co</h5>
                                                <p>MERN Stack</p>
                                            </div>
                                        </div>
                                        <div className="icon-link"><i className="icon-plus" /></div>
                                    </a>
                                </div>
                            </div> 
                            
                            {/* item end */}


                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-5" title>
                                        <img alt="Book Search" src="images/portfolio/BookSearch.png" />
                                        <div className="overlay">
                                            <div className="portfolio-name">
                                                <h5>Book Search</h5>
                                                <p>Google API, GraphQL, React, Apollo Server</p>
                                            </div>
                                        </div>
                                        <div className="icon-link"><i className="icon-plus" /></div>
                                    </a>
                                </div>
                            </div>
                            
                            {/* item end */}


                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-6" title>
                                        <img alt="Budget Tracker" src="images/portfolio/BudgetTracker.png" />
                                        <div className="overlay">
                                            <div className="portfolio-name">
                                                <h5>Budget Tracker</h5>
                                                <p>Node.js, Express.js, Mongoose, MongoDB & MongoDB Atlas</p>
                                            </div>
                                        </div>
                                        <div className="icon-link"><i className="icon-plus" /></div>
                                    </a>
                                </div>
                            </div> 
                            
                            {/* item end */}


                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-7" title>
                                        <img alt="Team Portfolio Generator" src="images/portfolio/TeamPortGen.png" />
                                        <div className="overlay">
                                            <div className="portfolio-name">
                                                <h5>Team Portfolio Creator</h5>
                                                <p>Node.js, HTML, CSS, CLA</p>
                                            </div>
                                        </div>
                                        <div className="icon-link"><i className="icon-plus" /></div>
                                    </a>
                                </div>
                            </div> 
                            
                            {/* item end */}


                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-8" title>
                                        <img alt="README Generator" src="images/portfolio/README-Generator.png" />
                                        <div className="overlay">
                                            <div className="portfolio-name">
                                                <h5>README Generator</h5>
                                                <p>Node.js, CLA</p>
                                            </div>
                                        </div>
                                        <div className="icon-link"><i className="icon-plus" /></div>
                                    </a>
                                </div>
                            </div>  
                            
                            {/* item end */}

                        </div> {/* portfolio-wrapper end */}

                    </div> {/* twelve columns end */}

                    {/* Modal Popup */}
                    <div id="modal-1" className="open-modal mfp-hide">
                        <img className="swggrp" src="images/portfolio/modals/illbehonest.png" alt="Social Media View" />
                        <div className="description-box">
                            <h4><a href="https://illbehonest.herokuapp.com/">I'll Be Honest</a></h4>
                            <p>A cutthroat hobbyist social media fullstack web development platform where users can submit posts for two types of audience feedback: "Don't Make Me Cry" or "Roast Me, Baby".</p>
                                <span className="categories"><i className="fa fa-tag" />Node.js, Express.js, Moment.js, Express-Session, MySQL, Sequelize, Sass, Bootstrap, bcrypt, dotenv</span>
                        </div>
                        <div className="linked-proj">
                            <a href="https://github.com/GildedRose/illbehonest">Details</a>
                            <a className="open-modal-dismiss">Close</a>
                        </div>
                    </div>{/* modal-1 End */}

                    <div id="modal-2" className="open-modal mfp-hide">
                        <img className="swggrp" src="images/portfolio/modals/sootheR02.png" alt="sootheR Application View" />
                        <div className="description-box">
                            <h4><a href="https://devmadia.github.io/soother/">sootheR</a></h4>
                            <p>sootheR is a news reader for relevant articles with an intuitive user interface to promote soothing and comforting random quotes to offset negative emotions brought on by pandemic updates.</p>
                            <span className="categories"><i className="fa fa-tag" />JavaScript, Foundation, JQuery, API, HTML, CSS, News API</span>
                        </div>
                        <div className="linked-proj">
                            <a href="https://github.com/Devmadia/soother">Details</a>
                            <a className="open-modal-dismiss">Close</a>
                        </div>
                    </div>{/* modal-2 End */}

                    <div id="modal-3" className="open-modal mfp-hide">
                        <img className="swggrp" src="images/portfolio/modals/RegexTutorial.png" alt="Regex Tutorial View" />
                        <div className="description-box">
                            <h4><a href="https://gist.github.com/Devmadia/d8707641ee92024d91e7be261f0cb8e2">Regex Tutorial</a></h4>
                            <p>This tutorial is specific to utilizing Regular Expressions (Regex) for matching an HTML tag. Implimentation of a Regex in this way is a narrow pattern search. The following tutorial will help demonstrate the usage of an HTML Tag Regex search.</p>
                            <span className="categories"><i className="fa fa-tag" />TAGS, TAGS</span>
                        </div>
                            <div className="linked-proj">
                            <a href="https://gist.github.com/Devmadia/d8707641ee92024d91e7be261f0cb8e2">Details</a>
                            <a className="open-modal-dismiss">Close</a>
                        </div>
                    </div>{/* modal-3 End */}

                    <div id="modal-4" className="open-modal mfp-hide">
                        <img className="swggrp" src="images/portfolio/modals/RedCatCo.png" alt="Red Cat & CO Demo View" />
                        <div className="description-box">
                            <h4><a href="https://mysterious-island-01047.herokuapp.com/">Red Cat & Co</a></h4>
                            <p>An interactive MERN stack single page application fulfilling Red Cat & Co (client) needs for a revamped, versatile website utilizing React, GraphQL, Apollo Server, Stripe API, MongoDB, and MongoDB Atlas.</p>
                            <span className="categories"><i className="fa fa-tag" />TAGS, TAGS</span>
                        </div>
                        <div className="linked-proj">
                            <a href="https://github.com/Devmadia/redcatandco">Details</a>
                            <a className="open-modal-dismiss">Close</a>
                        </div>
                    </div>{/* modal-4 End */}

                    <div id="modal-5" className="open-modal mfp-hide">
                        <img className="swggrp" src="images/portfolio/modals/BookSearch.png" alt="Book Search Engine View" />
                        <div className="description-box">
                            <h4><a href="https://grisly-treat-69547.herokuapp.com/">A Book Search Engine</a></h4>
                            <p>A MERN stack, with a React front end, MongoDB databse and Node.js/Express.js server and API application utilizing Google Books API search engine. Users can search for and save books they want to read or purchase at a later date.</p>
                            <span className="categories"><i className="fa fa-tag" />Node.js, Express.js, Bootstrap, Apollo Server, JSON Web Token, GraphQL, Mongoose, MongoDB Atlas, React, React Router Dom, Heroku</span>
                        </div>
                        <div className="linked-proj">
                            <a href="https://github.com/Devmadia/abooksearchengine">Details</a>
                            <a className="open-modal-dismiss">Close</a>
                        </div>
                    </div>{/* modal-5 End */}

                    <div id="modal-6" className="open-modal mfp-hide">
                        <img className="swggrp" src="images/portfolio/modals/BudgetTracker.png" alt="Budget Tracker View" />
                        <div className="description-box">
                            <h4><a href="https://intense-sea-12375.herokuapp.com/">PWA Budget Tracker</a></h4>
                            <p>A budget tracker application to assist users in adding expenses and deposits to their budget with or without a connection to the internet. Users have functionality of the application even while offline. The budget application updates their total once a connection to the internet is re-established. Application utilizes Express.js, Service Workers, and IndexedDB API.</p>
                            <span className="categories"><i className="fa fa-tag" />Node.js, Express.js, Mongoose, MongoDB Atlas, IndexedDB</span>
                        </div>
                        <div className="linked-proj">
                            <a href="https://github.com/Devmadia/pwa-budget-tracker">Details</a>
                            <a className="open-modal-dismiss">Close</a>
                        </div>
                    </div>{/* modal-6 End */}

                    <div id="modal-7" className="open-modal mfp-hide">
                        <img className="swggrp" src="images/portfolio/modals/TeamPortGen.png" alt="Team Portfolio View" />
                        <div className="description-box">
                            <h4><a href="https://github.com/Devmadia/prof-team-portfolio-generator">Team Portfolio Generator</a></h4>
                            <p>Node.js command-line application that takes in information about employees and generates an HTML webpage that displays summaries for each person.</p>
                            <span className="categories"><i className="fa fa-tag" />Node.js, CLA, HTML/CSS</span>
                        </div>
                        <div className="linked-proj">
                            <a href="https://github.com/Devmadia/prof-team-portfolio-generator">Details</a>
                            <a className="open-modal-dismiss">Close</a>
                        </div>
                    </div>
                    {/* modal-7 End */}

                    <div id="modal-8" className="open-modal mfp-hide">
                        <img className="swggrp" src="images/portfolio/modals/README-Generator.png" alt="README Generator" />
                        <div className="description-box">
                            <h4><a href="https://github.com/Devmadia/prof-team-portfolio-generator">README Generator</a></h4>
                            <p>Node.js command-line application that takes in information about employees and generates an HTML webpage that displays summaries for each person.</p>
                            <span className="categories"><i className="fa fa-tag" />Node.js, CLA, HTML/CSS</span>
                        </div>
                        <div className="linked-proj">
                            <a href="https://github.com/Devmadia/prof-team-portfolio-generator">Details</a>
                            <a className="open-modal-dismiss">Close</a>
                        </div>
                    </div>{/* modal-1 End */}
                </div> {/* row End */}
            </section>
        );
}
export default Portfolio;