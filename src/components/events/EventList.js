import React from 'react';
import events from "../../controllers/events";
import EventCard from './EventCard';
import "../../styles/components/EventList.scss";

export default class EventList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            events: []
        }
    }

    componentDidMount() {
        events.get().then((res) => {
            let events = []
            for (let i = 0; i < res.length; i++) {
                console.log("COOL", res[i].start);
                if (res[i].start >= Date.now()) {
                    events.push(res[i]);
                }
            }
            this.setState({
                events
            })
        }).catch((err) => {
            console.log("Error fetching events!");
            console.log(err);
        });
    }

    render() {
        return (
            <div class="events-list">
                <h2>Upcoming Events</h2>
                {this.state.events.map((event) => 
                        (event.start >= Date.now()) && (
                            <EventCard
                                id={event.id}
                                name={event.name}
                                start={event.start}
                                end={event.end}
                                location={event.location}
                                map_url={event.map_url}
                            />
                        )
                )}
            </div>
        );
    }

}