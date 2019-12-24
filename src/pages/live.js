import React from 'react';

export default class Live extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <iframe width="1920" height="1080" src="https://www.youtube.com/embed/aMvzFi4EX2c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}