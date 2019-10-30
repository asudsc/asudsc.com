import React from "react"
import bg from "../images/bg.png";
import logo from "../images/logo.jpg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
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

export default class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header title={"Developer Student Club – Arizona State University"}>
                    <div className={"intro"}>
                        <div className={"intro_image"}>
                            <img src={intro_banner_bg} className={"intro_stuff"}></img>
                        </div>
                        <div className={"intro_text"}>
                            <img src={grid} className={"grid"}></img>
                            <div className={"intro_text_wrapper"}>
                                <img src={google_developers_logo} class={"g_logo"}></img>
                                <h1 className={"tagline"}>Build Great Things, Together</h1>
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
                        <div style={{ "display": "inline-block", "marginLeft": "10%" }}>
                            <h1 className={"title"}>Get Involved with DSC</h1>
                            <p className={"description"}>Join the club on SunDevilSync and come for our Information Session.<br /><br /> Yes, we'll have free pizza 🍕.</p>
                            <br />
                            <br />
                            <div className={"get_involved_buttons"}>
                                <a href="https://asu.campuslabs.com/engage/organization/dsc" target="_blank">
                                    <Button theme={"asu"}>Join us on SunDevilSync</Button>
                                </a>
                                <a href="https://ananay.me/asudsc-slack" target="_blank">
                                    <Button theme={"blue"}>Join the Slack</Button>
                                </a>
                            </div>
                        </div>
                        <div className={"info-session"}>
                            <EventCard
                                name={"Info Session – Developer Student Club"}
                                start={1574127000}
                                end={1574130600}
                                location={"Pima Auditorium MU 230"}
                                rsvp={"https://asu.campuslabs.com/engage/event/5080027"}
                                gcal={"https://asu.campuslabs.com/engage/event/5080027/googlepublish"}
                            ></EventCard>
                        </div>
                    </div>
                </Header>
            </div >
        )
    }
}