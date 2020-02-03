import React from "react"
import bg from "../images/bg.png";
import logo from "../images/logo.jpg";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaChevronDown, FaCalendar, FaClock, FaLocationArrow, FaSlackHash, FaGithub, FaLinkedin } from "react-icons/fa";
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
import { FiMapPin, FiClock, FiCalendar, FiPlayCircle, FiSlack } from "react-icons/fi";
import moment from 'moment';
import Swal from 'sweetalert2';
import members from "../models/members";
import CoreTeamHiring from "../components/partials/CoreTeamHiring";
import Meetings from "../components/partials/Meetings";
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
    this.setState({
      responsive: common.checkResponsive()
    });
    window.onresize = () => {
      this.setState({
        responsive: common.checkResponsive()
      });
    }
    if (this.state.responsive) {

    }
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

  handleFormSubmit(e) {
    e.preventDefault();
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
              <h1 className={"title"}>Developer Student Club at Arizona State University</h1>
              <h1 className={"almost-here"}>
                Thank you for joining us at our info session. We will be starting with all our sessions in Spring 2020.<br />In the meantime, you can sign up for our updates below.</h1>
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

            {/* Meeting */}
            <Meetings />

            {/* Core Team Hiring */}
            {/* <CoreTeamHiring />*/}

            {/* Members */}
            <div className={"box"}>
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
            </div>

          </div>
        </Header>
      </div>
    )
  }
}