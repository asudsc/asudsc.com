import React from 'react';
import Header from '../../components/header';
import { Box, Grid } from "@material-ui/core";
import Button from "../../components/Button";
import { FaSlackHash } from 'react-icons/fa';
const user = require('../../controllers/user');
const Loading = require('react-loading-animation');

export default class Confirm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: false,
            errorCode: '',
            success: false
        }
    }

    getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
            vars[key] = value;
        });
        return vars;
    }

    componentDidMount() {
        let token = this.getUrlVars()["token"];
        if (token) {
            user.confirm(token).then((r) => {
                this.setState({
                    success: true,
                    loading: false
                });
            }).catch((err) => {
                if (err.toString() == "alreadyVerified") {
                    this.setState({
                        errorCode: "alreadyVerified"
                    });
                }
                this.setState({
                    error: true
                })
            });
        } else {
            this.setState({
                error: true
            })
        }
    }

    render() {
        return (
            <Header showLogo={true}>
                <Grid container justify={"center"}>
                    <Box pt={25}>
                        {this.state.loading && !this.state.error &&
                            <div>
                                <Loading
                                    isLoading={this.state.loading}
                                    width={80}
                                    height={80}
                                    strokeWidth={4}
                                >
                                </Loading>
                                <Box pt={5}>
                                    <h1>Confirming your membership</h1>
                                </Box>
                            </div>
                        }
                        {this.state.error && this.state.errorCode == 'alreadyVerified' &&
                            <div>
                                <h1>You're already verified.</h1>
                                <br />
                                <p>You don't need to confirm your membership again! Instead, get started by hopping on to our Slack.</p>
                                <br /><br />
                                <center>
                                    <a href="https://ananay.me/asudsc-slack">
                                        <Button variant={"contained"} theme={"blue"} id={"slackbutton"}>
                                            <FaSlackHash />{'\u00A0\u00A0\u00A0'}Join the Slack!
                                        </Button>
                                    </a>
                                </center>
                            </div>
                        }
                        {this.state.error && this.state.errorCode != 'alreadyVerified' &&
                            <div>
                                <h1>Sorry, we couldn't confirm your membership!</h1>
                                <br />
                                <p>Your confirmation link might be expired or invalid. Please get in touch with us at <a href="mailto:team@asudsc.com">team@asudsc.com</a> or the Slack.</p>
                                <br /><br />
                                <center>
                                    <a href="https://asudsc.slack.com/signup">
                                        <Button variant={"contained"} theme={"blue"} id={"slackbutton"}>
                                            <FaSlackHash />{'\u00A0\u00A0\u00A0'}Join the Slack!
                                        </Button>
                                    </a>
                                </center>
                            </div>
                        }
                        {this.state.success &&
                            <div className="wrap">
                                <h1>Thank you! Your membership has been confirmed.</h1>
                                <br />
                                <p>Please check your ASU email for more information, and click the button below to <b>sign up on our Slack</b>. <br /> We will also be sending you an invite to our information session to your ASU Email.</p>
                                <br /><br />
                                <center>
                                    <a href="https://asudsc.slack.com/signup">
                                        <Button variant={"contained"} theme={"blue"} id={"slackbutton"}>
                                            <FaSlackHash />{'\u00A0\u00A0\u00A0'}Join the Slack!
                                        </Button>
                                    </a>
                                </center>
                            </div>
                        }
                    </Box>
                </Grid>
            </Header>
        );
    }

}
