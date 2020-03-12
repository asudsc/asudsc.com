import React from 'react';
import "../../styles/components/Coronavirus.scss";

export default class Coronavirus extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"coronavirus_advisory"}>
                <h1>Important: COVID-19 Coronavirus Advisory 😷</h1>
                <p>As per <a href="https://coronavirus.asu.edu" target="_blank">ASU's Coronavirus Advisory</a>, classes will now be online. <b>However, </b> it is also mentioned that <b>public events will still be held.</b> Keeping that in mind, <b>ASU DSC will continue to host its events in person</b>, but will also live stream the events online. We honor the presence of our attendees, so to make it a safer experience, <b>ASU DSC will be providing free alcohol-based hand sanitizers for use at its events.</b></p>
            </div>
        )
    }

}