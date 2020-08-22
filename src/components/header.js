import React from 'react';
import Helmet from "react-helmet";
import dsclogo from "../images/dsclogo.svg";
import logo_horizontal from "../images/logo.svg";
// import logo_horizontal from "../images/logo_horizontal.png";
import { FiMenu } from "react-icons/fi";
import Events from "../components/partials/Events";
import common from "./common.js";
import "../styles/menu.scss";
import { slide as Menu } from 'react-burger-menu'
import { FaWindowClose, FaTimes } from 'react-icons/fa';
import { Grid, AppBar, Tab, Tabs, styled, Typography, Box, CircularProgress } from '@material-ui/core';
import EventsPage from "../components/pages/EventsPage";
import AboutPage from "../components/pages/AboutPage";
import CoreTeamPage from "../components/pages/CoreTeamPage";

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

const AB = styled(AppBar)({
    width: '100%'
});

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            responsive: false,
            menuOpen: false,
            index: 0
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

    state = {
        index: 0,
    };

    callbackTabChange = (index) => {
        this.setState({
            index
        })
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

    handleTabChange = (event, value) => {
        this.setState({
            index: value,
        });
    };

    handleChangeIndex = index => {
        this.setState({
            index,
        });
    };

    tabProps(index) {
        return {
            id: `full-width-tab-${index}`,
            'aria-controls': `full-width-tabpanel-${index}`,
        };
    }

    render() {
        return (
            <div className={"page"}>
                <Helmet>
                    <title>{this.props.title}</title>
                </Helmet>
                <AppBar position={"fixed"} color={"default"}>
                    <Tabs
                        value={this.state.index}
                        onChange={this.handleTabChange}
                        variant={"scrollable"}
                        scrollButtons={"auto"}
                        indicatorColor="primary"
                    >
                        <Tab label="Home" {...this.tabProps(0)} />
                        {/*<Tab label="Events"  {...this.tabProps(1)} />*/}
                        <Tab label="Core Team"  {...this.tabProps(3)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={this.state.index} index={0} dir={'ltr'}>
                    <div className={"content"}>
                        {this.props.children}
                    </div>
                </TabPanel>
                {/*<TabPanel value={this.state.index} index={1} dir={'ltr'}>
                    <div className={"content"}>
                        <EventsPage />
                    </div>
                </TabPanel>*/}
                {/*<TabPanel value={this.state.index} index={2} dir={'ltr'}>
                    <div className={"content"}>
                        <AboutPage />
                    </div>
                </TabPanel>*/}
                <TabPanel value={this.state.index} index={1} dir={'ltr'}>
                    <div className={"content"}>
                        <CoreTeamPage />
                    </div>
                </TabPanel>
                <div className={"footer"}>
                    <center>
                        Copyright &copy; Developer Student Club at Arizona State University. Powered by Google Developers. Made by <a href="https://ananayarora.com">Ananay Arora</a>
                    </center>
                </div>
            </div >
        )
    }

}