import React from 'react';

import { Link } from 'react-router-dom';

import './Home.scss'
import Footer from './Footer';

const Home = ( ) => {
    return (
        <div className="landing">
            <div className="main">
                <div className="heading">
                    <div className="title">Sphery Solutions for all your web needs</div>
                    <div className="desc">We will bring your business to the digital world. Get a meeting for free. Pay when you’re satisfied.</div>
                    <div className="main-btns">
                        <Link to="/Contact" className="btn-full startnow-btn btn">Start now</Link>
                        <Link to="/Portfolio" className="portfolio-btn btn">
                        <div className="portfolio">Portfolio</div>
                        <img src="img/ArrowRight.svg" alt="arrow" />
                        </Link>
                    </div>
                </div>
                <div className="illustration">
                <img src="img/Illustration-Main.svg" alt="illustration" className="main-illustration hide-mobile"/>
                <img src="img/Arrow.svg" alt="arrow" className="arrow hide-mobile oldArrow"/>
                </div>
                <img src="img/Background.svg" alt="bg" className="bg"/>
            </div>
            <div className="services">
                <img src="img/Services.svg" alt="services illustration" className="services-illustration hide-mobile"/>
                <div className="services-mobile">
                    <img src="img/WebDev.svg" alt="web development" />
                    <img src="img/BrandID.svg" alt="brand identity" />
                    <img src="img/RegularMaintenance.svg" alt="regular maintenance" />
                </div>
            </div>
            <div className="cards">
                <div className="left-card card">
                    <div className="card-title">We Understand</div>
                    <div className="card-text">We get you, we get your users. Let us show you exactly why we're the best pick for you</div>
                    <Link to="/Portfolio" className="portfolioCard-btn btn">
                    <div>Portfolio</div> 
                    <img src="img/portfolio_icon.svg" alt="icon" />
                    </Link>
                </div>
                <div className="middle-card card">
                    <div className="card-title">We Collaborate</div>
                    <div className="card-text">Never wonder how far along our project is. We post regular updates, notes available at any time</div>
                    <Link to="/Contact" className="btn-full btn">Hire us</Link>
                </div>
                <div className="right-card card">
                    <div className="card-title">We Have Solutions</div>
                    <div className="card-text">We are a team of creative developers with a wide range of specialties, who prioritize Users</div>
                    <Link to="/Services" className="services-btn btn">
                        <div>Services</div>
                        <img src="img/skills_icon.svg" alt="icon" />
                    </Link>
                </div>
            </div>
            <div className="contact">
                <img className="contact-illustration hide-mobile" src="img/Contact.svg" alt="contact"></img>
                <div className="contact-text">
                    <div className="contact-title">Set up a meeeting now</div>
                    <div className="contact-text">Discuss details with our agents right now, available 24/7. Work on <strong>your terms</strong></div>
                    <div className="btn btn-full btn">Start chatting</div>
                </div>
                <span className="contact-bg"></span>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;
