import React from 'react';
import { Grid, Box } from '@material-ui/core';
import coreteam_graphic from "../../images/core-team.png";
import common from "../common";
import Button from "../Button";

export default class SolutionChallenge extends React.Component {

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
                            <iframe class="dj-video__video" width="558" height="344" src="https://www.youtube.com/embed/s5RC0XaYQT4?hl=en" frameborder="0" allowfullscreen=""></iframe>
                        </Grid>
                        <Grid xs={this.state.responsive ? 12 : 5}>
                            <h1 className={"title"}>Google Solution Challenge 2020</h1>
                            <br />

                            <div className={"desc"}>
                                The Solution Challenge is an annual contest presented by Developer Student Clubs (DSC) that invites students to develop solutions for local community problems using one or more Google products or platforms.
                            </div>
                            <br />
                            <br />
                            <a href={"https://events.withgoogle.com/dsc-solution-challenge/#content"} target={"_blank"}><Button theme={"blue"}>Register for the Solution Challenge</Button></a>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        )
    }
}