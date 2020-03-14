import React from 'react';
import BrandingHeader from "../partials/BrandingHeader";
import Members from "../partials/Members";
export default class EventsPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <BrandingHeader page_title={"Core Team – Developer Student Club"} />
                <br />
                <br />
                <Members />
            </div>
        )    
    }

}