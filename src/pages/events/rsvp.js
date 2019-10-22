import React from 'react';
import { Box, Grid } from "@material-ui/core";
import events from "../../controllers/events";
import Button from "../../components/Button";
import Header from "../../components/header";
const Loading = require('react-loading-animation');

export default class RSVP extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: false,
            success: false,
            eventInfo: {},
            rsvp: ''
        }
    }

    getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
            vars[key] = value;
        });
        return vars;
    }


    componentDidMount() {
        let id = this.getUrlVars()["id"];
        let token = this.getUrlVars()["token"];
        if (id && token) {
            events.getEvent(id).then((r) => {
                events.getRSVP(id, token).then((rsvp) => {
                    this.setState({
                        success: true,
                        loading: false,
                        eventInfo: r,
                        rsvp
                    });
                })
            }).catch((err) => {
                this.setState({
                    'error': true
                })
            });
        } else {
            this.setState({
                'error': true
            });
        }

        // let going_button = document.getElementById('going_button');
        // let not_going_button = document.getElementById('not_going_button');

        // going_button.onclick = function()  {

        // }

        // not_going_button.onclick = function() {

        // }

    }

    render() {
        return (
            <Header showLogo={true}>
                <Grid container justify={"center"}>
                    <Box pt={25}>
                        <div>
                            {this.state.loading && !this.state.error &&
                                <div>
                                    <Loading
                                        isLoading={this.state.loading}
                                        width={80}
                                        height={80}
                                        strokeWidth={4}
                                    >
                                    </Loading>
                                    <Box pt={5}>
                                        <h1>Loading event details...</h1>
                                    </Box>
                                </div>
                            }
                            {
                                this.state.error &&
                                <div>
                                    <h1>Couldn't fetch the details of that event</h1>
                                    <br />
                                    <p>That event may have been deleted, or may be a private one.</p>
                                </div>
                            }
                            {
                                this.state.success && !this.state.error &&
                                <div>
                                    <h1>{this.state.eventInfo.name}</h1>
                                    <br />
                                    <h3>
                                        {this.state.rsvp == "invited" &&
                                            "You are currently invited for this event, will you be going for this event?"
                                        }
                                        {this.state.rsvp == "going" &&
                                            "All good! You are going for this event."
                                        }
                                        {this.state.rsvp == "not_going" &&
                                            "You've responded with Not Going for this event"
                                        }
                                    </h3>
                                    <br />
                                    <br />
                                    <Grid container justify={"center"}>
                                        <Box p={2}>
                                            <Button variant={"contained"} theme={"blue"} id={"going_button"}>
                                                Yes, I'm going!
                                            </Button>
                                        </Box>
                                        <Box p={2}>
                                            <Button variant={"contained"} theme={"red"} id={"not_going_button"}>
                                                Nope, I can't go :(
                                            </Button>
                                        </Box>
                                    </Grid>
                                </div>
                            }
                        </div>
                    </Box>
                </Grid>
            </Header>
        )
    }
}