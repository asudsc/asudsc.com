import React from 'react';
import { Grid, Box } from '@material-ui/core';
import coreteam_graphic from "../../images/core-team.png";
import common from "../common";
import Button from "../Button";

export default class CoreTeamHiring extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
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
        if (this.state.responsive) {

        }
    }

    render() {
        return (
            <div className={"box"}>
              <Box pt={7}>
                <Grid
                  container
                  direction={this.state.responsive ? "column" : "row"}
                  xs={12}
                >
                  <Grid
                    xs={this.state.responsive ? 12 : 7}
                    justify="center"
                    alignItems="center"
                  >
                    <img src={coreteam_graphic} width={this.state.responsive ? "300px" : "auto"} />
                  </Grid>
                  <Grid xs={this.state.responsive ? 12 : 5}>
                    <h1 className={"title"}>Meetings</h1>
                    <br />
                    <p>We meet on every Monday at 6 PM. The details of the next meeting are below.</p>
                    <br />
                    <h2>Date: Monday, January 27th 2020.</h2><br />
                    <h2>Time: 6:00 PM</h2><br />
                    <h2>Venue: Hayden Library Room 232</h2>
                    {/* <div className={"desc"}>Wanted to be part of something that makes a difference? You've come to the right place. We&rsquo;re looking for passionate and talented individuals to be part of our core team! Picture yourself organizing something like Google I/O Extended. <br /><br /> What roles can you think of? Here are a few of them:
                                                <br /><br />
                     
                    </div> */}
                  </Grid>
                </Grid>
              </Box>
            </div>
        )
    }
}