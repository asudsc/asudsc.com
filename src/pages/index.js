import React from "react"
import bg from "../images/bg.png";
import logo from "../images/logo.jpg";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaChevronDown, FaCalendar, FaClock, FaLocationArrow, FaSlackHash, FaGithub, FaLinkedin } from "react-icons/fa";
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

require('moment-countdown');

const AB = styled(AppBar)({
  width: '90%'
});


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

  joinSlack() {
    window.open("https://asudsc.slack.com/");
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
            Swal.fire({
              title: res.data.message,
              type: "success",
              text: "You've successfully registered for this event!"
            });
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
                      Swal.fire({
                        title: "Success",
                        type: "success",
                        text: "You've successfully registered for this event!"
                      });
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
        <Header title={"Developer Student Club – Arizona State University"}>
          <div className={"intro"}>
            <center>
              <h1 className={"title"}>Developer Student Club at Arizona State University</h1>
              <br />
              {this.state.loading &&
                <CircularProgress />
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
                      <a target="_blank" href={this.state.current_event["Livestream URL"]}><Button theme={"blue"}>Watch the livestream!</Button></a>
                    }
                  </div>
                </div>
              )}


              <br />
              {/*
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
                  </div>
                  <div className={"button"}>
                    <Button theme={"blue"} onClick={this.validateEmail}>Signup for Updates</Button>
                  </div>
                  <br />
                  <br />
                </div>
              </form>
              */}
            </center>
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
                    <Grid xs={this.state.responsive ? 12 : 3}>
                      <Button theme={"blue_solid"} onClick={this.watchInfoSession}>
                        <FiPlayCircle />&nbsp;&nbsp;
                        Watch the Info Session
                      </Button>
                    </Grid>
                    <Grid
                      xs={this.state.responsive ? 12 : 3}
                      mt={this.state.responsive ? 3 : 0}
                    >
                      <Box
                        mt={this.state.responsive ? 3 : 0}
                      >
                        <Button theme={"blue_solid"} onClick={this.joinSlack}><FaSlackHash />&nbsp;&nbsp;Join the Slack Workspace</Button>
                      </Box>
                    </Grid>

                  </Grid>
                  <br />
                  <br />
                  <p>All our communication is over Slack, join the Slack today!</p>
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

            <SolutionChallenge />

            {/* Meeting */}
            {/* <Meetings /> */}
            <Events />
            {/* Core Team Hiring */}
            {/* <CoreTeamHiring />*/}

            {/* Members */}
            <Members />
            {/*<div className={"box"}>
              <Box pt={7}>
                <center>
                  <h1 className={"title"}>Meet the Core Team</h1>
                  <div className={"members"}>
                    {members.map((member) => (
                      <div className={"member"}>
                        <div className={"member_img"}>
                          <img src={member.image}></img>
                        </div>
                        <div className={"member_name"}>
                          {member.website &&
                            <a href={member.website}><span>{member.name}</span></a>
                          }
                          {!member.website &&
                            <span>{member.name}</span>
                          }
                        </div>
                        <div className={"member_position"}>
                          {member.position}
                        </div>
                        <div className={"member_email"}>
                          {member.email}
                        </div>
                        <div className={"member_socials"}>
                          {member.github &&
                            <div className={"social_icon"}>
                              <a href={member.github} target="_blank">
                                <FaGithub size={30} />
                              </a>
                            </div>
                          }
                          {member.linkedin &&
                            <div className={"social_icon"}>
                              <a href={member.linkedin} target="_blank">
                                <FaLinkedinIn size={30} />
                              </a>
                            </div>
                          }
                          {member.facebook &&
                            <div className={"social_icon"}>
                              <a href={member.facebook} target="_blank">
                                <FaFacebookF size={30} />
                              </a>
                            </div>
                          }
                          {member.twitter &&
                            <div className={"social_icon"}>
                              <a href={member.twitter}>
                                <FaTwitter size={30} />
                              </a>
                            </div>
                          }
                          {member.instagram &&
                            <div className={"social_icon"}>
                              <a href={member.instagram} target="_blank">
                                <FaInstagram size={30} />
                              </a>
                            </div>
                          }
                        </div>
                      </div>
                    ))}
                  </div>
                </center>
              </Box>
            </div>*/}

          </div>
        </Header>
      </div>
    )
  }
}