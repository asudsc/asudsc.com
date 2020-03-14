import React from 'react';
import "../../styles/components/Coronavirus.scss";
import common from "../common";
import Button from "../Button";
export default class Coronavirus extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            responsive: false
        }
    }

    componentDidMount() {
        this.setState({
            responsive: common.checkResponsive()
        });
        window.onresize = () => {
            this.setState({
                responsive: common.checkResponsive()
            });
        }
    }

    render() {
        if (this.state.visible == true) {

            return (
                <div className={"coronavirus_advisory"}>
                    <h1>🚨 All in person events cancelled, online only!</h1>
                    <p>As per <a href="https://coronavirus.asu.edu" target="_blank">ASU's Coronavirus Advisory</a>, we are forced to cancel all in-person events for the next 30 days. <b>All events will be live-streamed here on asudsc.com, and we will be going live as soon as the countdown below hits zero.</b></p>
                    <br /><br />
                    {!this.state.responsive &&
                        <Button onClick={() => {
                            this.setState({
                                visible: false
                            });
                        }}>Gotcha, Hide Message</Button>
                    }
                    {this.state.responsive &&
                        <div className={"sticky_hide"}>
                            <Button onClick={() => {
                                this.setState({
                                    visible: false
                                });
                            }}>Gotcha, Hide Message</Button>
                        </div>
                    }
                </div>
            )
        } else {
            return (<div></div>);
        }
    }

}