import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <section id="contact">
                <div className="row section-head">
                    <div className="two columns header-col">
                        <h1><span>Get In Touch</span></h1>
                    </div>
                    <div className="ten columns">
                        <p className="lead">New-new-Doctor. It is! It's the city of New New York! Strictly speaking, it's the fifteenth 
                        New York since the original, so that makes it New-New-New-New-New-New-New-New-New-New-New-New-New-New-New New 
                        York. What? What?! WHAT?! I'd call you a genius, except I'm in the room. River, you know my name. You whispered 
                        my name in my ear! There's only one reason I would ever tell anyone my name. There's only one time I could... Aw, 
                        I wanted to be ginger! I've never been ginger! And you, Rose Tyler! Fat lot of good you were! You gave up on me! 
                        Ooh, that's rude. Is that the sort of man I am now? Am I rude? Rude and not ginger.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="eight columns">
                        {/* form */}
                        <form action method="post" id="contactForm" name="contactForm">
                            <fieldset>
                                <div>
                                <label htmlFor="contactName">Name <span className="required">*</span></label>
                                <input type="text" defaultValue={"How do I address you?"} size={35} id="contactName" name="contactName" />
                                </div>

                                <div>
                                <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                                <input type="text" defaultValue={"Enter your email..."} size={35} id="contactEmail" name="contactEmail" />
                                </div>

                                <div>
                                <label htmlFor="contactSubject">Subject</label>
                                <input type="text" defaultValue={`What's the topic?`} size={35} id="contactSubject" name="contactSubject" />
                                </div>

                                <div>
                                <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                                <textarea cols={25} rows={10} id="contactMessage" name="contactMessage" defaultValue={"Enter a message here"} />
                                </div>

                                <div>
                                <button className="submit">Submit</button>
                                <span id="image-loader">
                                    <img className="contact-load" alt="" src="images/loader.gif" />
                                </span>
                                </div>
                            </fieldset>
                        </form> {/* Form End */}

                        {/* contact-warning */}

                        <div id="message-warning"> Daleks Don't Have Feelings, You've Reached the Wrong Universe (error message)</div>
                        {/* contact-success */}

                        <div id="message-success">
                            <i className="fa fa-check" />Your message was sent, thank you!<br />
                        </div>
                    </div>

                    <aside className="four columns footer-widgets">
                        <div className="widget widget_contact">
                        <h4>Address and Phone</h4>
                        <p className="address">
                            Devmadia<br />
                            Remote Availability <br />
                            <span>(918) 324-6891</span>
                        </p>
                        </div>
                    </aside>
                </div>
            </section>
        )
    }
}

export default Contact;