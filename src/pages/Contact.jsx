import React from 'react';
import PageTitle from '../components/pagetitle';
import img from '../assets/images/common/contact-page.jpeg'
import './styles.scss'

function Contact(props) {
    return (
        <div>
            <PageTitle title='Contact Us' />

            <section className="tf-section tf-contact">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-md-12">
                            <div className="content-about m-b50 mobie-40" data-aos="fade-right" data-aos-duration="800">
                                <div className="tf-title st2 m-b17">
                                    <h4 className="title">Have a question </h4>
                                </div>
                                <p className="m-r-40">Fill up the Form  and ou team will get back to within 24 hrs</p>
                            </div>
                            <form action="contact/contact-process.php" className="form-contact" id="contactform" data-aos="fade-right" data-aos-duration="800">
                                <fieldset>
                                    <input type="text" name="name" id="name" placeholder="Name" />
                                </fieldset>
                                <fieldset>
                                    <input type="email" name="mail" id="mail" placeholder="Email Address" />
                                </fieldset>
                                <fieldset>
                                    <input type="number" name="phone" id="phone" placeholder="Phone" />
                                </fieldset>
                                <fieldset>
                                    <textarea placeholder="Type your Messege" rows="5" tabIndex="4" name="message" className="message" id="message"></textarea>
                                </fieldset>
                                <button className="tf-button btn-effect" type="submit"><span className="boder-fade"></span><span className="effect">Send Message</span></button>
                            </form>
                        </div>
                        <div className="col-xl-7  col-md-12">
                            <div className="contact-details" data-aos="fade-left" data-aos-duration="800">
                                <div className="adress wrap-fx">
                                    <div className="location">
                                        <h6>Location</h6>
                                        <ul>
                                            <li>Chennai,India</li>
                                        </ul>
                                    </div>
                                    <div className="mail">
                                        <h6>Contact Us</h6>
                                        <ul>
                                            <li>+1 666 8888</li>                                        </ul>
                                    </div>
                                </div>
                                <div className="flat-map wow fadeIn animated d-flex justify-content-center " data-wow-delay="0.3ms" data-wow-duration="1000ms">
                                    <img src={img} alt="mzoid-logo" className='contact-page__image align-self-center'  loading="lazy"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;