import React from 'react';
import { FiMapPin, FiClock, FiCalendar } from "react-icons/fi";
import moment from 'moment';
import "../../styles/components/EventCard.scss";
import { Grid, Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export default class EventCard extends React.Component {

    constructor(props) {
        super(props);
        this.getTimings = this.getTimings.bind(this);
        this.getDate = this.getDate.bind(this);
    }

    getDate() {
        const date = moment.unix(this.props.start).format('dddd, MMMM Do, YYYY')
        return date;
    }

    getTimings() {
        const startTime = moment.unix(this.props.start).format('h:mm A');
        const endTime = moment.unix(this.props.end).format('h:mm A');
        return startTime + " - " + endTime;
    }

    render() {
        return (
            <div className={"event-card"}>
                <h3 className={"name"}>{this.props.name}</h3>
                <div className="event-meta">
                    <div className="meta date">
                        <span className="icon">
                            <FiCalendar />
                        </span>
                        <span className="value">
                            {this.getDate()}
                        </span>
                    </div>
                    <div className="meta time">
                        <span className="icon">
                            <FiClock />
                        </span>
                        <span className="value">
                            {this.getTimings()}
                        </span>
                    </div>
                    <div className="meta location">
                        <span className="icon">
                            <FiMapPin />
                        </span>
                        <span className="value">
                            {this.props.location}
                        </span>
                    </div>
                </div>
                <Grid container justify={"center"}>
                    <Box pt={4}>
                        <Button
                            variant={"outlined"}
                            color={"primary"}
                        >
                            RSVP
                        </Button>
                    </Box>
                    <Box pl={4} pt={4}>
                        <Button
                            variant={"outlined"}
                            color={"primary"}
                        >
                            Directions
                        </Button>
                    </Box>
                </Grid>
            </div>
        )
    }

}