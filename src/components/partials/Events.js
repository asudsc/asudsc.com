import React from 'react';
import { CircularProgress, Grid, Box } from '@material-ui/core';
import EventCard from "../events/EventCard";
import EventsController from "../../controllers/events";
import Swal from 'sweetalert2';
import moment from 'moment';

export default class Events extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            loading: true
        };
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

    getEvents() {
        EventsController.getEvents().then((res) => {
            let events = []
            for (let i = 0; i < res.length; i++) {
                console.log(res[i]["Start Time"], moment().unix());
                if (res[i]["Start Time"] >= moment().unix()) {
                    events.push(res[i]);
                }
            }
            this.setState({
                events,
                loading: false
            });
        });
    }

    componentDidMount() {
        this.getEvents();
    }

    render() {
        return (
            <div className={"box"}>
                <center>
                    <Box pt={3}>
                        <h1>Upcoming Events</h1>
                        <br /><br /><br />
                        {this.state.loading &&
                            <CircularProgress />
                        }
                        {!this.state.loading &&
                            this.state.events.map((event) => (
                                <EventCard
                                    name={event["Event Name"]}
                                    start={event["Start Time"]}
                                    end={event["End Time"]}
                                    location={event["Location"]}
                                    rsvp={() => {
                                        this.rsvp(event["ID"])
                                    }}
                                />
                            ))
                        }
                    </Box>
                </center>
            </div>
        )
    }
}