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

    coreTeamApply() {
    window.open("https://forms.gle/5rrVPPuvdBqL65B79");
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
                    <h1 className={"title"}>
                      We&rsquo;re hiring!
                                            </h1>
                    <br />
                    <br />
                    <div className={"desc"}>Wanted to be part of something that makes a difference? You've come to the right place. We&rsquo;re looking for passionate and talented individuals to be part of our core team! Picture yourself organizing something like Google I/O Extended. <br /><br /> What roles can you think of? Here are a few of them:
                                                <br /><br />
                      <ul>
                        <li>Treasurer</li>
                        <li>Event Manager</li>
                        <li>Web Developer</li>
                        <li>Photographer</li>
                        <li>Teaching Assistant</li>
                        <li>Social Media Manager</li>
                        <li>Graphic Designer</li>
                        <li>Videographer</li>
                        <li>... and any other role you can think of!</li>
                      </ul>
                    </div>
                    <br />
                    <br />
                    <Button theme={"blue_solid"} onClick={this.coreTeamApply}>Apply now</Button>
                  </Grid>
                </Grid>
              </Box>
            </div>
        )
    }
}