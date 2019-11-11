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
import intro_banner_bg from '../images/intro_banner_bg.jpg';
import grid from '../images/grid.svg';
import get_involved_pic from "../images/get_involved.png";
import { FiMapPin, FiClock, FiCalendar } from "react-icons/fi";
import pic_ananay from "../images/members/ananay.jpg";
import pic_randy from "../images/members/randy.jpeg";
import pic_rahul from "../images/members/rahul.png";

export default class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header title={"Developer Student Club – Arizona State University"}>
                    <div className={"intro"} style={{ background: `url(${grid})` }}>
                        <div className={"intro_image"}>
                            <img src={intro_banner_bg} className={"intro_stuff"}></img>
                        </div>
                        <div className={"intro_text"}>
                            {/* <img src={grid} className={"grid"}></img> */}
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
                    </div>
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
                            </div>
                        </center>
                    </div>
                </Header>
            </div >
        )
    }
}