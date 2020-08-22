import React from 'react';

export default class Ideas extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
	window.location.href = 'https://docs.google.com/spreadsheets/d/1jbEze7puAy4DOkSflkrjy-z9tROmw2rlJ-beidxXscM/edit#gid=0';
    }

    render() {
        return (<div></div>);
    }
}
