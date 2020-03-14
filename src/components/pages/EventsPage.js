import React from 'react';
import BrandingHeader from "../partials/BrandingHeader";
import Events from '../partials/Events';
export default class EventsPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <BrandingHeader page_title={"Events – Developer Student Club"} />
                <br />
                <Events />
                <br />
                <br />
            </div>
        )    
    }

}