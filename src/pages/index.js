import React from "react"
import bg from "../images/bg.png";
import logo from "../images/logo.jpg";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaChevronDown, FaCalendar, FaClock, FaLocationArrow, FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import Header from "../components/header";
import intro_image from "../images/intro_3.jpg";
import { Grid, AppBar, Tab, Tabs, styled, Typography, Box, CircularProgress } from '@material-ui/core';
import "../styles/home.scss";
import logo_horizontal from "../images/logo.svg";
import intro_stuff from "../images/intro.svg";
import Button from "../components/Button";
import common from "../components/common";
import who_are_we_image from '../images/intro.jpeg';
import EventList from '../components/events/EventList';
import EventCard from "../components/events/EventCard";
import google_developers_logo from '../images/google_developers.png';
import google_developers_logo_white from '../images/google_developers_white.png';
import intro_banner_bg from '../images/intro_banner_bg.jpg';
import grid from '../images/grid.svg';
import get_involved_pic from "../images/get_involved.png";
import { FiMapPin, FiClock, FiCalendar, FiPlayCircle, FiSlack } from "react-icons/fi";
import moment from 'moment';
import members from "../models/members";
import CoreTeamHiring from "../components/partials/CoreTeamHiring";
import Meetings from "../components/partials/Meetings";
import Events from "../components/partials/Events";
import Members from "../components/partials/Members";
import Signup from "../components/partials/signup_for_updates.js";
import EventsController from "../controllers/events";
import Swal from 'sweetalert2';
import SolutionChallenge from '../components/partials/solution_challenge.js';
import Coronavirus from "../components/partials/Coronavirus";
import dsclogo from "../images/dsclogo.svg";

require('moment-countdown');

const AB = styled(AppBar)({
  width: '90%'
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box pt={5}>{children}</Box>}
    </Typography>
  );
}


export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      'email': '',
      'emailValid': false,
      'event_status': 'none',
      'current_event': [],
      'loading': true,
      countdown: false
    }
  }

  componentDidMount() {
    this.setState({
      responsive: common.checkResponsive()
    });
    window.onresize = () => {
      this.setState({
        responsive: common.checkResponsive()
      });
    }
    this.getEvents();
  }



  getEvents() {
    // Get the next event
    let events = [];
    EventsController.getEvents().then((res) => {
      events = res;
      events = events.sort((a, b) => (a["Start Time"] > b["Start Time"]) ? 1 : -1)
      for (let i = 0; i < events.length; i++) {
        console.log("Events", moment.unix(events[i]["Start Time"]).diff());
        if (moment.unix(events[i]["Start Time"]).diff() < 0 && moment.unix(events[i]["End Time"]).diff() > 0) {
          // There's an event going on now!
          this.setState({
            loading: false,
            current_event: events[i],
            event_status: 'ongoing'
          })
          setInterval(() => {
            this.setState({
              countdown: moment.unix(events[i]["End Time"]).countdown().toString()
            });
          }, 1000);
          break;
        } else if (moment.unix(events[i]["Start Time"]).diff() > 0) {
          this.setState({
            loading: false,
            current_event: events[i],
            event_status: 'upcoming'
          })
          setInterval(() => {
            this.setState({
              countdown: moment.unix(events[i]["Start Time"]).countdown().toString()
            });
          }, 1000);
          break;
        }
      }
    });
  }

  watchInfoSession() {
    window.open("https://www.youtube.com/watch?v=aMvzFi4EX2c");
  }

  joinDiscord() {
    window.open("https://discord.gg/uDnXrbh");
  }

  joinSunDevilSync() {
    window.open("https://asu.campuslabs.com/engage/organization/dsc");
  }

  coreTeamApply() {
    window.open("https://forms.gle/5rrVPPuvdBqL65B79");
  }

  rsvp(id) {
    Swal.fire({
      "title": "Enter your @asu.edu email",
      "input": 'email',
      showCancelButton: true,
      confirmButtonText: 'Signup'
    }).then((email) => {
      if (email.value) {
        Swal.fire({
          title: "Loading...",
          text: "Please wait while we register you",
          showCloseButton: false,
          showConfirmButton: false
        });
        EventsController.rsvpWithEmail(id, email.value).then((res) => {
          if (res.data.success == true) {
            console.log(id);
            if (id == "3") {
              Swal.fire({
                title: 'Register for Google Solution Challenge 2020',
                type: 'info',
                text: "Thank you for RSVPing to this event. To confirm your entry, please register with Google for the Solution Challenge by clicking the button below.",
                showConfirmButton: true,
                confirmButtonText: 'Register'
              }).then(() => {
                window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdd3yPa-OsA4yRP7QRFLzmKBwk5uWRVVxqT1oeF1VRkChisXg/viewform";
              });
            } else {
              Swal.fire({
                title: "Success",
                type: "success",
                text: "You've successfully registered for this event!"
              });
            }
          } else {
            if (res.data.error == "need_asu_id") {
              Swal.fire({
                title: "We need some more info!",
                text: "What is your 10 digit ASU ID?",
                "input": 'text',
                inputValidator: (value) => {
                  return new Promise((resolve) => {
                    if (value.length == 10) {
                      resolve()
                    } else {
                      resolve('ASU ID is 10 digits!')
                    }
                  })
                },
                showCancelButton: true,
              }).then((asu_id) => {
                if (asu_id.value) {
                  Swal.fire({
                    title: "Loading...",
                    text: "Please wait while we register you...",
                    showCloseButton: false,
                    showConfirmButton: false
                  });
                  EventsController.rsvpWithEmailAndASUID(id, email.value, asu_id.value).then((rsvpResult) => {
                    console.log(rsvpResult.data.success);
                    if (rsvpResult.data.success == true) {
                      console.log(id);
                      if (id == "3") {
                        Swal.fire({
                          title: 'Register for Google Solution Challenge 2020',
                          type: 'info',
                          text: "Thank you for RSVPing to this event. To confirm your entry, please register with Google for the Solution Challenge by clicking the button below.",
                          showConfirmButton: true,
                          confirmButtonText: 'Register'
                        }).then(() => {
                          window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdd3yPa-OsA4yRP7QRFLzmKBwk5uWRVVxqT1oeF1VRkChisXg/viewform";
                        });
                      } else {
                        Swal.fire({
                          title: "Success",
                          type: "success",
                          text: "You've successfully registered for this event!"
                        });
                      }
                    } else {
                      Swal.fire({
                        title: "Oops!",
                        type: "error",
                        text: rsvpResult.data.error
                      });
                    }
                  });
                }
              });
            } else {
              Swal.fire({
                title: "Error",
                text: res.data.error,
                type: "error"
              });
            }
          }
        });
      }
    });
  }

  render() {
    return (
      <div>
        <Header title={"Developer Student Club – Arizona State University"} tabProps={this.tabProps}>
          <div className={"intro_wrapper"}>
            <center>
              {/*<Coronavirus />*/}
            </center>
            <div className={"intro"}>
              <center>
                <img src={dsclogo} className={"dsclogo"} />
                <h1 className={"title"}>Developer Student Club at Arizona State University</h1>
                <br />
                {this.state.loading &&
                  <div></div>
                }
                {!this.state.loading && this.state.event_status == "none" &&
                  <h2>We don't have an event coming up soon! Signup for our mailing list, and we'll let you know.</h2>
                }

                {!this.state.loading && this.state.event_status == "upcoming" && (
                  <div>
                    <h2>Join us at our next event: {this.state.current_event["Event Name"]}</h2><br />
                    {this.state.countdown != false &&
                      <h2>{this.state.countdown}</h2>
                    }
                    <br />
                    <a onClick={() => this.rsvp(this.state.current_event['ID'])}>
                      <Button theme={"blue"}>RSVP for this event!</Button>
                    </a>
                  </div>
                )}

                {!this.state.loading && this.state.event_status == "ongoing" && (
                  <div>
                    <h2>{this.state.current_event["Event Name"]} is happening right now!</h2>
                    <br />
                    <br />
                    <div>
                      {this.state.current_event["Livestream URL"] != "FALSE" &&
                        <a target="_blank" href={this.state.current_event["Livestream URL"]}><Button theme={"blue"}>Join event!</Button></a>
                      }
                    </div>
                    <br />
                    <br />
                  </div>
                )}


                <br />

              </center>
            </div>
          </div>

          <div className={"main_container"}>

            {/* Intro box */}
            <div className={"box main_info_box"}>
              <div className={"powered_by"}>
                <center>
                  <img
                    src={google_developers_logo}
                    className={"google_logo"}
                    align={"absmiddle"}
                  >
                  </img>
                </center>
              </div>
              <div className={"tagline"}>
                Developer Student Clubs are university based community groups for students interested in Google developer technologies.
                            </div>
              <center>
                <Box pt={2} pb={4}>
                  <Grid
                    direction={this.state.responsive ? "column" : "row"}
                    justify={"center"}
                    alignItems={"center"}
                    container
                  >
                  {/*
                    <Grid xs={this.state.responsive ? 12 : 3}>
                    <Button theme={"blue_solid"} onClick={this.watchInfoSession}>
                    <FiPlayCircle />&nbsp;&nbsp;
                    Watch the Info Session
                    </Button>
                    </Grid>
                  */}
                    <Grid
                      xs={this.state.responsive ? 12 : 3}
                      mt={this.state.responsive ? 3 : 0}
                    >
                      <Box
                        mt={this.state.responsive ? 3 : 0}
                      >
                        <Button theme={"blue_solid"} onClick={this.joinDiscord}><FaDiscord />&nbsp;&nbsp;Join the Discord</Button>
                      </Box>
                    </Grid>

                  </Grid>
                  <br />
                  <br />
                  <p>All our communication is over Discord, join the Discord today!</p>
                  <br />
                  {/* Social media buttons */}
                  <Grid
                    direction={"row"}
                  >
                    <div className={"social_icon"}>
                      <a href="https://facebook.com/asudsc" target="_blank">
                        <FaFacebookF size={30} />
                      </a>
                    </div>
                    <div className={"social_icon"}>
                      <a href="https://instagram.com/asu.dsc" target="_blank">
                        <FaInstagram size={30} />
                      </a>
                    </div>
                    <div className={"social_icon"}>
                      <a href="https://twitter.com/asudsc" target="_blank">
                        <FaTwitter size={30} />
                      </a>
                    </div>
                  </Grid>

                  <Box
                    mt={4}
                  >
                    <Button theme={"asu"} onClick={this.joinSunDevilSync}>Join the SunDevilSync</Button>
                  </Box>

                </Box>
              </center>
            </div>

            <Signup handleFormSubmit={this.handleFormSubmit} validateEmail={this.validateEmail} />
            {/* 
              <SolutionChallenge />
            */}
            {/*<Events />*/}
            {/* Meeting */}
            {/* <Meetings /> */}
            {/* Core Team Hiring */}
            {/* <CoreTeamHiring />*/}

            {/* Members */}
            {/* <Members /> */}
          </div>
        </Header>
      </div>
    )
  }
}