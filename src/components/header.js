import React from 'react';
import Helmet from "react-helmet";
import dsclogo from "../images/dsclogo.svg";
import logo_horizontal from "../images/logo.svg";
// import logo_horizontal from "../images/logo_horizontal.png";
import { FiMenu } from "react-icons/fi";
import common from "./common.js";
import "../styles/menu.scss";
import { slide as Menu } from 'react-burger-menu'
import { Grid } from '@material-ui/core';
import { FaWindowClose, FaTimes } from 'react-icons/fa';

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            responsive: false,
            menuOpen: false
        };
        this.menuClick = this.menuClick.bind(this);
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

    menuClick() {
        if (!this.state.menuOpen) {
            document.getElementById('menu').style.height = 'auto';
            this.setState({
                menuOpen: true
            })
        } else {
            document.getElementById('menu').style.height = '70px';
            this.setState({
                menuOpen: false
            })
        }
    }

    render() {
        return (
            <div className={"page"}>
                <Helmet>
                    <title>{this.props.title}</title>
                </Helmet>
                <div className={"menu"} id="menu">
                    <center>
                        {/* <Grid item xs={this.state.responsive ? 4 : 2}> */}
                        <img src={dsclogo} className={"dsclogo"}></img>
                        {this.props.showLogo == true &&
                            <img src={dsclogo} className={"logo_symbol"}></img>
                        }
                        {/* </Grid> */}
                    </center>
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                    >
                        {this.state.responsive &&
                            <Grid item xs={2}>
                                {/* <div class="hamburger" onClick={this.menuClick}>
                                    {this.state.responsive &&
                                     !this.state.menuOpen &&
                                        <FiMenu size={"1.4em"} />
                                    }
                                    {this.state.responsive &&
                                     this.state.menuOpen &&
                                        <FaTimes size={"1.4em"} />
                                    }
                                </div> */}
                            </Grid>
                        }
                        <Grid item xs={10}>
                            <div>
                                {/* <ul>
                                    <li>Home</li>
                                    <li>Events</li>
                                    <li>Meet the team</li>
                                    <li>Contact</li>
                                </ul> */}
                            </div>
                            {/* <div class="socials">
                                <ul>
                                    <li>
                                        <a
                                            target="_blank"
                                            rel="noopener"
                                            href="https://instagram.com/asu.dsc">
                                            <img src="https://i.imgur.com/pZiUQgN.png" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            target="_blank"
                                            rel="noopener"
                                            href="https://facebook.com/asudsc">
                                            <img src="https://i.imgur.com/kN8cpwb.png" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            target="_blank"
                                            rel="noopener"
                                            href="https://twitter.com/asudsc">
                                            <img src="https://i.imgur.com/hVSvJi8.png" />
                                        </a>
                                    </li>
                                </ul>
                            </div> */}
                        </Grid>
                    </Grid>
                </div>
                <div className={"content"}>
                    {this.props.children}
                </div>
                <div className={"footer"}>
                    <center>
                        Copyright &copy; Developer Student Club at Arizona State University. Powered by Google Developers. Made by <a href="https://ananayarora.com">Ananay Arora</a>
                    </center>
                </div>
            </div>
        )
    }

}