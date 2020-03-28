import React from 'react';

export default class Ideas extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.location.href = "https://docs.google.com/document/d/1HV6PmQdfUS4Q7l43qhIcx8rFLz2mA7JpoW3B_SjK3ws/edit#";
    }

    render() {
        return (<div></div>);
    }
}