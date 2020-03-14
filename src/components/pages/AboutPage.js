import React from 'react';
import BrandingHeader from "../partials/BrandingHeader";
export default class EventsPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <BrandingHeader page_title={"About – Developer Student Club"} />
            </div>
        )    
    }

}