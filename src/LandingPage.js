import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import SocialLinks from './components/SocialLinks';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from "react-router-dom";
import './LandingPage.css';

function LandingPage() {
    return (
        <div className="LandingPage">
            {/* Profile Section */}
            <div id="home" className="profile">
                <img className="profile__pic" src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/sharjeel-cover.png?alt=media&token=52e2228a-e5e5-4aa3-b87c-afedd11f1ea3" alt="Sharjeel Yunus | Web Developer & Graphic Designer" title="Sharjeel Yunus | Web Developer & Graphic Designer" />
                <div className="header__info">
                    <div>
                        <b><span className="hello">Hello.👋</span></b>
                    </div>
                    <div className="intro__card">
                        <span className="comment">{"// Self-Introduction"}</span> <br />
                        <span className="card__title">Name</span>
                        <span className="yellow">&nbsp;{"{"}</span> <br />
              &nbsp; FirstName: <span className="blue">Sharjeel;</span> <br />
              &nbsp; LastName: <span className="blue">Yunus;</span> <br />
                        <span className="yellow">{"}"}</span>
                    </div>
                    <br />
                    <div className="intro__card">
                        <span className="card__title">What I Do?</span>
                        <span className="yellow">&nbsp;{"{"}</span> <br />
              &nbsp; Profession: <span className="blue">Developer;</span> <br />
              &nbsp; Hobby: <span className="blue">Designer;</span> <br />
                        <span className="yellow">{"}"}</span>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div id="about" className="about">
                <div className="about__container">
                    <div className="about__details">
                        <h2 title="Who I am?">About Me</h2>
                        <p id="about-para">
                            Hi, I’m Sharjeel Yunus, a&nbsp;
                            <span title="at Islamia University of Bahwalpur">
                                Computer Science Student.</span>
                                &nbsp; I have serious passion for modren looking websites with a little
                                bit of animation.
                        </p>
                        <div className="technologies">Technologies that I use:</div>
                        <div className="display__skills">
                            <ul className="left__skills">
                                <li><img className="skill" src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Freact-logo.png?alt=media&token=700ef1d5-3433-4072-8310-85e6d86c183a" alt="Reactjs" /> React</li>
                                <li><img className="skill" src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Fjs-logo.png?alt=media&token=679df788-0d75-4898-8fdc-062029340b9d" alt="JS" /> JavaScript</li>
                                <li><img className="skill" src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Fhtml-logo.png?alt=media&token=afc1ed9c-0c1c-46a7-9fb3-d40edd76b2df" alt="HTML" /> HTML / CSS</li>
                                <li><img className="skill" src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2F5847f40ecef1014c0b5e488a.png?alt=media&token=23cc3649-079c-4662-b681-3a542064e727" alt="" /> Firebase</li>
                                <li><img className="skill" src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/App%20Development%2Fflutter-logo.png?alt=media&token=701b89ad-3d40-45ba-ab70-7db99a5b0ef6" alt="Flutter" /> Flutter</li>
                            </ul>
                            <ul className="right__skills">
                                <li><img className="skill" src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Fnodejs.png?alt=media&token=2f4f2c45-0951-45e2-8665-cc2835f1a71c" alt="NodeJS" /> Node.js / Express.js</li>
                                <li><img className="skill" src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Fmongodb.png?alt=media&token=5169fa2a-307b-47f8-9340-7b3077807b5d" alt="MongoDB" /> MongoDB</li>
                                <li><img className="skill" src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Fbootstrap-5-1.svg?alt=media&token=19dcc7df-09f0-434c-ba35-7cca1cbf639d" alt="Bootstrap" /> Bootstrap</li>
                                <li><img className="skill" src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/illustrator.png?alt=media&token=6de3232e-ba22-4228-8383-6ae8b4270507" alt="Illustrator" /> Illustrator</li>
                                <li><img className="skill" src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/photoshop-cc.svg?alt=media&token=c5ea16d6-675f-43ba-9079-85957f2cc6f4" alt="Photoshop" /> Photoshop</li>
                            </ul>
                        </div>
                        <div className="button__certificates">
                            <Link to="Certificates">
                                <button className="button"><ArrowForwardIcon />Certificates <ArrowBackIcon /></button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <img
                            className="about__cover"
                            src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Sharjeel%20artwork.png?alt=media&token=8e3ba1cd-0e01-4387-9517-b92da563bd8a"
                            alt="cover"
                        />
                    </div>
                </div>

            </div>

            {/* Portfolio Section */}
            <div id="portfolio" className="portfolio">
                <h2>Portfolio</h2>
                <div className="portfolio__web">
                    <div className="graphic__design">
                        <div className="header__card">
                            <Link to="GraphicsDesign"><h3>Graphic Design</h3></Link>
                        </div>
                        <div>
                            <div className="grid-wrapper">
                                <div className="box zone">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Graphics%2FJohn%20Wick.png?alt=media&token=395e7b66-0428-460e-b089-ab917c351c7d" title="John Wick" alt="John Wick" />
                                </div>
                                <div className="box zone">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Graphics%2FMinal.png?alt=media&token=65426863-4f5c-44ac-9232-8ff2e6a25f8e" title="Minal" alt="Minal" />
                                </div>
                                <div className="box zone">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Graphics%2FShahveer%20J.png?alt=media&token=480a5f57-ec87-4675-b368-f647fdc4d13d" title="Shahveer Jafary" alt="Shahveer Jafary" />
                                </div>
                                <div className="box zone">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Graphics%2FBerlin.png?alt=media&token=4fdb080a-697b-4fef-90e4-8dba9c56cb29" title="Berlin" alt="Berlin" />
                                </div>
                            </div>
                            <div>
                                <Link to="/GraphicsDesign">
                                    <button className="button">Click here to see more Graphics</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div id="web-dev">
                        <div className="header__card">
                            <Link to="/WebDev">
                                <h3>
                                    <code>web dev projects</code>
                                </h3>
                            </Link>
                        </div>
                        <div className="dev">
                            <ul className="grid-wrapper-developer">
                                <li className="box-web zone-web">
                                    <p>SMART BRAIN</p>
                                    <div className="main">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Fsmart-brain.jpg?alt=media&token=694bc634-806d-47d8-94e7-5a2c22823b72" className="image" alt="Smart Brain" />
                                    </div>
                                    <div className="middle">
                                        <div className="text">
                                            <a href="https://github.com/sharjeelyunus/Smart-Brain" rel="noreferrer" target="_blank">SOURCE CODE</a>
                                        </div>
                                    </div>
                                    <div className="dev-language">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Freact-logo.png?alt=media&token=700ef1d5-3433-4072-8310-85e6d86c183a" alt="react-logo" />
                                        <p>REACT</p>
                                    </div>
                                </li>

                                <li className="box-web zone-web">
                                    <p>PEEK</p>
                                    <div className="main">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Fpeek.jpg?alt=media&token=593d2461-cc03-427d-aaf9-831eee428102" className="image" alt="PEEK" />
                                    </div>
                                    <div className="middle">
                                        <div className="text">
                                            <a href="https://github.com/sharjeelyunus/peek-mern" target="_blank" rel="noreferrer">SOURCE CODE</a>
                                        </div>
                                    </div>
                                    <div className="dev-language">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2FMERN-logo.png?alt=media&token=aee49d64-950b-48dd-bf39-3846c33aaa78" alt="MERN" />
                                        <p>MERN</p>
                                    </div>
                                </li>

                                <li className="box-web zone-web box-js30">
                                    <a href="/">
                                        <p>JAVASCRIPT30</p>
                                        <div className="main">
                                            <img src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Fjavascript30.jpg?alt=media&token=3aad848a-54b5-4bc1-9a64-1c8344020f86" className="image" alt="JavaScript30" />
                                        </div>
                                        <div className="dev-language">
                                            <p>30 VANILLA JS CODING PROJECTS</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div >
                            <Link to="/WebDev">
                                <button className="button">Click here to see more Web Apps</button>
                            </Link>
                        </div>
                    </div>

                    <div id="app-dev">
                        <div className="header__card">
                            <Link to="/AppDev">
                                <h3>
                                    <code>app dev projects</code>
                                </h3>
                            </Link>
                        </div>
                        <div className="dev apps-dev">
                            <ul className="grid-wrapper-developer">
                                <li className="box-web zone-web">
                                    <p>FLASH CHAT</p>
                                    <div className="main">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/App%20Development%2Fflash%20chat.png?alt=media&token=91b134f6-d2e0-47ab-af6e-6ae5850ba902" className="image" alt="Flash Chat" />
                                    </div>
                                    <div className="middle">
                                        <div className="text">
                                            <a href="https://github.com/sharjeelyunus/flash-chat-flutter" target="_blank" rel="noreferrer">SOURCE CODE</a>
                                        </div>
                                    </div>
                                    <div className="dev-language">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/App%20Development%2Fflutter-logo.png?alt=media&token=701b89ad-3d40-45ba-ab70-7db99a5b0ef6" alt="Flutter Logo" />
                                        <p>FLUTTER</p>
                                    </div>
                                </li>

                                <li className="box-web zone-web">
                                    <p>COVID TRACKER</p>
                                    <div className="main">
                                        <img
                                            src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/App%20Development%2FCorona%20tracker.jpg?alt=media&token=9f40d54d-4a97-476b-b7c3-6fd92b981bfa" className="image" alt="Corona Tracker" />
                                    </div>
                                    <div className="middle">
                                        <div className="text">
                                            <a
                                                href="https://github.com/sharjeelyunus/covid19_tracker"
                                                target="_blank" rel="noreferrer"
                                            >SOURCE CODE</a
                                            >
                                        </div>
                                    </div>
                                    <div className="dev-language">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/App%20Development%2Fflutter-logo.png?alt=media&token=701b89ad-3d40-45ba-ab70-7db99a5b0ef6" alt="Flutter Logo" />
                                        <p>FLUTTER</p>
                                    </div>
                                </li>

                                <li className="box-web zone-web">
                                    <p>BMI CALCULATOR</p>
                                    <div className="main">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/App%20Development%2FBMI%20Calculator.jpg?alt=media&token=f8e2bae9-0c8d-4f06-96fa-fc21237aaf60" className="image" alt="BMI Calculator" />
                                    </div>
                                    <div className="middle">
                                        <div className="text">
                                            <a
                                                href="https://github.com/sharjeelyunus/bmi-calculator-flutter"
                                                target="_blank" rel="noreferrer"
                                            >SOURCE CODE</a
                                            >
                                        </div>
                                    </div>
                                    <div className="dev-language">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/App%20Development%2Fflutter-logo.png?alt=media&token=701b89ad-3d40-45ba-ab70-7db99a5b0ef6" alt="Flutter Logo" />
                                        <p>FLUTTER</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <Link to="/AppDev">
                                <button className="button">Click here to see more Apps</button>
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="portfolio-grid">
                    <div id="flex">
                        <div className="grid-wrapper-mob">
                            <div id="graphics-design">
                                <Link to="/GraphicsDesign">
                                    <button className="spin">
                                        <div>GRAGPHIC <br /> DESIGN</div>
                                    </button>
                                </Link>
                            </div>

                            <div id="web-development">
                                <Link to="/WebDev">
                                    <button className="spin">
                                        <div> WEB <br />DEVELOPMENT</div>
                                    </button>
                                </Link>
                            </div>

                            <div id="apps-development">
                                <Link to="/AppDev">
                                    <button className="spin">
                                        <div>APP <br />DEVELOPMENT</div>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blogs */}
            <div id="blogs">
                <div className="blog-platforms">
                    <h2>Blogs</h2>
                    <div id="flex">
                        <div className="grid-wrapper-blogs">
                            <div id="medium">
                                <a href="https://medium.com/@sharjeelyunus" target="_blank" rel="noreferrer">
                                    <button className="spin button">
                                        <p>Read Blogs on MEDIUM</p>
                                    </button>
                                </a>
                            </div>

                            <div id="dev">
                                <a href="https://dev.to/sharjeelyunus" target="_blank" rel="noreferrer">
                                    <button className="spin button">
                                        <p>Read Blogs on DEV</p>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact */}
            <div id="contact">
                <h2>Contact Me</h2>
                <div className="grid-wrapper-contact">
                    <div className="box zone">
                        <div className="contact-box">
                            <div className="box__contactInfo">
                                <div>
                                    <ul className="info contact-box-items">
                                        <li className="info-items" title="Email">
                                            <EmailIcon />
                                            <a href="mailto:sharjeel924@gmail.com">sharjeel924@gmail.com</a>
                                        </li>
                                        <li className="info-items" title="Call me">
                                            <PhoneIcon />
                                            <a href="callto:+923097574574">+92 308 7574574</a>
                                        </li>
                                    </ul>
                                </div>
                                <SocialLinks />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;