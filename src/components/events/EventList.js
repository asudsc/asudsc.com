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
            this.setState({
                events: res
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
                {this.state.events.map((event) => (
                    <EventCard
                        id={event.id}
                        name={event.name}
                        start={event.start}
                        end={event.end}
                        location={event.location}
                        map_url={event.map_url}
                    />
                ))}
            </div>
        );
    }

}