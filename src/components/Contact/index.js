import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, subject, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {

        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);

            if (!isValid) {
                setErrorMessage('Your email is invalid!')
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required!`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }


            return (
                <section id="contact">
                    <div className="row section-head">
                        <div className="two columns header-col">
                            <h1><span>Get In Touch</span></h1>
                        </div>
                        <div className="ten columns">
                            <p className="lead">Like a seldom seen Pokémon, Devmadia prefers to correspond through email or text messaging rather than meet
                            in person, which is why COVID-19 quarantine life hasn't quite affected her too much. Think back to when <i>The Net</i> was all the 
                            "rage" as Sandra Bullock endeared audiences with her role as a secluded web developer focused on taking care of her mother. 
                            Here the two are not unalike. 
                            <br />
                            Although now there's the added bonus to remote work with Zoom and Skype!</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="eight columns">
                            {/* form */}
                            <form action method="post" id="contact-form" name="contactForm" onSubmit={handleSubmit}>
                                <fieldset>
                                    <div>
                                    <label htmlFor="contactName">Name <span className="required">*</span></label>
                                    <input type="text" onBlur={handleChange} size={35} name="Full Name" defaultValue={name} />
                                    </div>

                                    <div>
                                    <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                                    <input type="text" onBlur={handleChange} size={35} name="email" defaultValue={email} />
                                    </div>

                                    <div>
                                    <label htmlFor="contactSubject">Subject</label>
                                    <input type="text" onBlur={handleChange} size={35} name="Subject" defaultValue={subject} />
                                    </div>

                                    <div>
                                    <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                                    <textarea cols={25} rows={10} name="Message" onBlur={handleChange} defaultValue={message} />
                                    </div>

                                    
                                    <div>
                                        {errorMessage && (
                                            <div className="p-3">
                                                <p className="error-text">{errorMessage}</p>
                                            </div> 
                                        )}

                                        <button className="submit" type="submit">Submit</button>
                                        
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
                            <h4>Contact</h4>
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
    

export default Contact;