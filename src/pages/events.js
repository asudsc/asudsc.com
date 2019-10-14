import React from 'react';
import EventsList from '../components/events/EventList';
export default class Events extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <EventsList />
            </div>
        );
    }
}