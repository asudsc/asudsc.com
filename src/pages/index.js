import React from "react"
import bg from "../images/bg.png";
import logo from "../images/logo.jpg";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Header from "../components/header";
import intro_image from "../images/intro_3.jpg";
import { Grid, Box } from '@material-ui/core';
import "../styles/home.scss";
import logo_horizontal from "../images/logo_white.svg";
import Button from "../components/Button";
import common from "../components/common";
import ASUEmail from "../components/ASUEmail";
import { withSwalInstance } from 'sweetalert2-react';
import who_are_we_image from '../images/intro.jpeg';
import user from "../controllers/user";
import swal from 'sweetalert2';
import EventList from '../components/events/EventList';
const SweetAlert = withSwalInstance(swal);

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            responsive: false,
            email: '',
            emailValid: false
        };
        this.emailInput = React.createRef();
        this.signupUser = this.signupUser.bind(this);
    }

    signupUser(recaptchaValue) {
        // Show Swal loading
        swal.fire({
            title: "Signing up"
        });
        swal.showLoading();
        user.signup(this.state.email, recaptchaValue).then((res) => {
            if (res.success) {
                swal.fire({
                    title: "Thank you!",
                    text: "You've been signed up for Developer Student Club ASU!",
                    type: "success"
                });
            } else {
                swal.fire({
                    title: 'Oops!',
                    text: res.error,
                    type: "error"
                });
            }
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
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

        // document.getElementById('signupbutton').onclick = () => {
        //     this.emailInput.current.checkEmail();
        //     if (this.state.emailValid) {
        //         this.signupUser();
        //     }
        // }

        // document.getElementById('email_subscribe').onsubmit = (e) => {
        //     e.preventDefault();
        //     this.emailInput.current.checkEmail();
        //     if (this.state.emailValid) {
        //         this.signupUser();
        //     }
        // }

    }

    render() {
        return (
            <Header showLogo={true}>
                <div className="intro">
                    <Grid container justify={"center"} spacing={this.state.responsive ? 12 : 10}>
                        <div className={"intro_section"}>
                            <div className={"background"} style={{ 'background-image': `url(${intro_image})` }}>
                                <div className={"overlay"}></div>
                                <div className={"intro_image"}>
                                    <center>
                                        <img src={logo_horizontal} className={"logo_horizontal"}></img>
                                        <br />
                                        <br />
                                        <b className={"powered_by"}>Powered by Google Developers</b>
                                    </center>
                                </div>
                            </div>
                        </div>

                        <div className={"info_section"}>
                            <Grid container xs={12} justify={"center"}>
                                <p className={"description"}><b>Developer Student Club ASU is a club to help students learn how to use Google Technologies for Computer Science, Software Engineering and Artificial Intelligence to make an impact in their local community, business and university.</b></p>
                                <br />
                                <br />
                            </Grid>
                        </div>

                        <Grid item xs={this.state.responsive ? 10 : 5}>
                            <br />
                            {/* <Box pt={1}>
                                <h2 class="signup-title">Join the club and come to our info session!  🍕</h2>
                                <br />
                                <p className={"signup-helper"}>Signup below to get added to our Slack, mailing list and the information session.</p>
                                <br />
                                <form id="email_subscribe">
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
                                    <Box pt={2}>
                                        <Button variant={"contained"} id={"signupbutton"} theme={"blue"}>Sign me up!</Button>
                                    </Box>
                                </form>
                            </Box> */}
                            <center>
                                <h2 class={"signup-title"}>Get involved with DSC</h2>
                                <br />
                                <br />
                                <center>
                                    <b>No Previous Coding Skills Required!</b>
                                </center>
                                <br />
                                <a target={"_blank"} ref="noopener" href={"https://asu.campuslabs.com/engage/organization/dsc"}>
                                    <Button variant={"contained"} id={"signupbutton"} theme={"red"}>Join the organization on SunDevilSync</Button>
                                </a>
                                <br />
                                <a target={"_blank"} ref="noopener" href={"https://ananay.me/asudsc-slack"}>
                                    <Button variant={"contained"} id={"signupbutton"} theme={"blue"}>Join the Slack Workspace</Button>
                                </a>
                            </center>
                        </Grid>

                        {/* <Grid item justify={"center"} xs={this.state.responsive ? 0 : 5}>
                            {this.state.responsive &&
                                <Grid container justify={"center"}>
                                    <img src={logo_horizontal} class={"logo-horizontal"} />
                                </Grid>
                            }

                            {!this.state.responsive &&
                                <img src={logo_horizontal} class={"logo-horizontal"} />
                            }
                            <p className="description">
                                <b>Developer Student Club ASU</b> – powered by <b>Google Developers</b> – is a program to help students learn how to use Google Technologies to make an impact in their local community, business and university.
                            </p>
                        </Grid> */}
                    </Grid>
                </div>
            </Header>
        );
    }
}

export default Home;
