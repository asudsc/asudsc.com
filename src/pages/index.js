import React from "react"
import bg from "../images/bg.png";
import logo from "../images/logo.jpg";
import { FaFacebookF, FaTwitter, FaInstagram, FaChevronDown, FaCalendar, FaClock, FaLocationArrow } from "react-icons/fa";
import Header from "../components/header";
import intro_image from "../images/intro_3.jpg";
import { Grid, Box } from '@material-ui/core';
import "../styles/home.scss";
import logo_horizontal from "../images/logo.svg";
import intro_stuff from "../images/intro.svg";
import Button from "../components/Button";
import common from "../components/common";
import ASUEmail from "../components/ASUEmail";
import who_are_we_image from '../images/intro.jpeg';
import user from "../controllers/user";
import EventList from '../components/events/EventList';
import EventCard from "../components/events/EventCard";
import google_developers_logo from '../images/google_developers.png';
import google_developers_logo_white from '../images/google_developers_white.png';
import intro_banner_bg from '../images/intro_banner_bg.jpg';
import grid from '../images/grid.svg';
import get_involved_pic from "../images/get_involved.png";
import { FiMapPin, FiClock, FiCalendar } from "react-icons/fi";
import pic_ananay from "../images/members/ananay.jpg";
import pic_andrew from "../images/members/andrew.jpg";
import pic_randy from "../images/members/randy.jpeg";
import pic_rahul from "../images/members/rahul.png";
import pic_vipanchi from "../images/members/vipanchi.jpg";
import moment from 'moment';
import Swal from 'sweetalert2';
require('moment-countdown');

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'email': '',
            'emailValid': false
        }
        this.emailInput = React.createRef();
        this.signupUser = this.signupUser.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount() {
        setInterval(function () {
            if (moment().unix() < 1574127600) {
                document.getElementById("timer").innerHTML = moment.unix(1574127600).countdown().toString();
            } else {
                window.location = '/live';
            }
        }, 500);
    }

    signupUser() {
        user.signup(this.state.email).then((result) => {
            if (result.success == true) {
                Swal.fire({
                    type: "success",
                    title: "Success",
                    text: `Thank you for signing up, ${result.firstName}`
                });
            } else {
                Swal.fire({
                    type: "error",
                    title: "Error",
                    text: result.error
                });
            }
        }).catch((err) => {
            Swal.fire({
                type: "error",
                type: "Error",
                text: err.toString()
            })
        });
    }

    validateEmail(e) {
        e.preventDefault();
        if (this.emailInput.current.checkEmail()) {
            this.signupUser();
        }
    }

    handleFormSubmit(e) {
        e.preventDefault();
        // this.emailInput.current.checkEmail();
        if (this.emailInput.current.checkEmail()) {
            this.signupUser();
        }
    }

    render() {
        return (
            <div>
                <Header title={"Developer Student Club – Arizona State University"}>
                    <div className={"intro"}>
                        <center>
                            <div id={"timer"}></div>
                            <div className={"powered-by"}>
                                <h1 className={"powered-by-text"}>Powered By</h1>
                                <img align="absmiddle" src={google_developers_logo_white} class={"g_logo"}></img>
                            </div>
                            <h1 className={"almost-here"}>Streaming our info session live. Come back here on Monday, November 18th at 6:30 PM.</h1>
                            <br />Our onsite info session is sold out! You can still <a target="_blank" href="https://www.eventbrite.com/e/info-session-developer-student-club-at-arizona-state-university-tickets-79307299267">Join the Waitlist</a>.
                                    <form id="email_subscribe" onSubmit={this.handleFormSubmit}>
                                <div className={"signup_for_updates"}>
                                    <div className={"asuemail"}>
                                        <ASUEmail
                                            ref={this.emailInput}
                                            email={(email) => {
                                                this.setState({
                                                    email
                                                })
                                            }}
                                            valid={(emailValid) => {
                                                this.setState({
                                                    emailValid
                                                })
                                            }}
                                        />
                                        <div className={"button"}>
                                            <Button theme={"blue"} onClick={this.validateEmail} >Signup for Updates</Button>
                                        </div>
                                    </div>
                                    <div className={"clear"}></div>
                                </div>
                            </form>
                            <br />
                            <br />
                            <div>Want to get a notification when the event starts? Signup above!</div>
                            <br />
                            <br />
                        </center>
                    </div>
                    {/* <div className={"intro"} style={{ background: `url(${grid})` }}>
                        <div className={"intro_image"}>
                            <img src={intro_banner_bg} className={"intro_stuff"}></img>
                        </div>
                        <div className={"intro_text"}>
                            <div className={"intro_text_wrapper"}>
                                <img src={google_developers_logo} class={"g_logo"}></img>
                                <h1 className={"tagline"}>Build Great Things, Together</h1>
                                <br />
                                <div class={"line"}></div>
                                <br />
                                <h2>The info session is here (ft. Free Pizza 🍕).</h2>
                                <br />
                                <div className={"deets"}>
                                    <h3><FiCalendar />&nbsp;&nbsp;Monday, 18th November, 2019</h3>
                                    <h3><FiClock />&nbsp;&nbsp;6:30 PM - 7:30 PM</h3>
                                    <h3><FiMapPin />&nbsp;&nbsp;Memorial Union Room 230</h3>
                                    <br />
                                    <a href="https://www.eventbrite.com/e/info-session-developer-student-club-at-arizona-state-university-tickets-79307299267" target="_blank">
                                        <Button theme={"blue"}>RSVP to the Info Session</Button>
                                    </a>
                                </div>
                                <br />
                                <p>Scroll down, there's more! ⬇️</p>
                            </div>
                        </div>
                    </div> */}
                    <div className={"section"}>
                        <br />
                        <center>
                            <div className={"socials"}>
                                <a href={"https://facebook.com/asudsc"} target="_blank">
                                    <FaFacebookF />
                                </a>
                                <a href={"https://instagram.com/asu.dsc"} target="_blank">
                                    <FaInstagram />
                                </a>
                                <a href={"https://twitter.com/asudsc"} target="_blank">
                                    <FaTwitter />
                                </a>
                            </div>
                        </center>
                        <br />
                        <br />
                        <br />
                        <div>
                            <center>
                                <h1 className={"title"}>Get Involved with DSC</h1>
                                <p className={"description"}>Join the club on SunDevilSync and come for our Information Session.<br />Yes, we'll have free pizza 🍕. <br /><br />Questions? Ask on the Slack if you want a quick answer!</p>
                                <br />
                                <br />
                                <div className={"get_involved_buttons"}>
                                    <a href="https://asu.campuslabs.com/engage/organization/dsc" target="_blank">
                                        <Button theme={"asu"}>SunDevilSync</Button>
                                    </a>
                                    <a href="https://ananay.me/asudsc-slack" target="_blank">
                                        <Button theme={"blue"}>Join the Slack</Button>
                                    </a>
                                </div>
                            </center>
                        </div>
                        {/* <div className={"info-session"}>
                            <EventCard
                                name={"Info Session – Developer Student Club"}
                                start={1574127000}
                                end={1574130600}
                                location={"Pima Auditorium MU 230"}
                                rsvp={"https://www.eventbrite.com/e/info-session-developer-student-club-at-arizona-state-university-tickets-79307299267"}
                            ></EventCard>
                        </div> */}
                    </div>
                    <br />
                    <br />
                    <div class={"line"}></div>
                    <br />
                    <br />
                    <div className={"section"}>
                        <center>
                            <h1 className={"title"}>What is Developer Student Club?</h1>
                            <p className={`description about`}>Developer Student Clubs are university based community groups for students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a DSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community. <br /> <br /> Developer Student Club at Arizona State University is a chapter of Developer Student Club at ASU.</p>
                        </center>
                    </div>
                    <br />
                    <br />
                    <div class={"line"}></div>
                    <br />
                    <br />
                    <div className={"section"}>
                        <center>
                            <h1 className={"title"}>Meet the team</h1>
                            <div className={"members"}>
                                <div className={"member"}>
                                    <img src={pic_ananay} />
                                    <a href={"https://ananayarora.com"} target={"_blank"}>
                                        <h3 className={"name"}>Ananay Arora</h3>
                                    </a>
                                    <h3 className={"social"}>@ananayarora</h3>
                                    <h3 className={"position"}>President</h3>
                                    <br />
                                    <h3 className={"email"}><a href={"mailto:ananay@asudsc.com"}>ananay@asudsc.com</a></h3>
                                </div>
                                <div className={"member"}>
                                    <img src={pic_andrew} />
                                    <h3 className={"name"}>Andrew Hill</h3>
                                    <h3 className={"position"}>Vice President</h3>
                                    <br />
                                    <h3 className={"email"}><a href={"mailto:andrew@asudsc.com"}>andrew@asudsc.com</a></h3>
                                </div>
                                <div className={"member"}>
                                    <img src={pic_randy} />
                                    <h3 className={"name"}>Randy Ngo</h3>
                                    <h3 className={"position"}>Vice President</h3>
                                    <br />
                                    <h3 className={"email"}><a href={"mailto:randy@asudsc.com"}>randy@asudsc.com</a></h3>
                                </div>
                                <div className={"member"}>
                                    <img src={pic_rahul} />
                                    <h3 className={"name"}>Rahulrajan Kartikeyan</h3>
                                    <h3 className={"position"}>Vice President</h3>
                                    <br />
                                    <h3 className={"email"}><a href={"mailto:rahul@asudsc.com"}>rahul@asudsc.com</a></h3>
                                </div>
                                <div className={"member"}>
                                    <img src={pic_vipanchi} />
                                    <h3 className={"name"}>Vipanchi Chacham</h3>
                                    <h3 className={"position"}>Core Team</h3>
                                </div>
                            </div>
                        </center>
                    </div>
                </Header>
            </div >
        )
    }
}