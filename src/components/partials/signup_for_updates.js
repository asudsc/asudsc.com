import React from 'react';
import Button from "../Button.js";
import ASUEmail from "../ASUEmail.js";
import user from "../../controllers/user";
import Swal from 'sweetalert2';
import common from "../common";
import { Grid, Box } from '@material-ui/core';

export default class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.emailInput = React.createRef();
        this.signupUser = this.signupUser.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
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

    signupUser() {
        Swal.showLoading();
        user.signup(this.state.email).then((result) => {
            if (result.success == true) {
                Swal.fire({
                    type: "success",
                    title: "Success",
                    text: `Thank you for signing up, ${result.firstName}`
                });
            } else {
                Swal.fire({
                    type: "error",
                    title: "Error",
                    text: result.error + ". Please email ananay@asu.edu and let him know about it ASAP!",
                });
            }
        }).catch((err) => {
            Swal.fire({
                type: "error",
                type: "Error",
                text: err.toString()
            })
        });
    }

    validateEmail(e) {
        e.preventDefault();
        if (this.emailInput.current.checkEmail()) {
            this.signupUser();
        }
    }

    handleFormSubmit(e) {
        e.preventDefault();
        if (this.emailInput.current.checkEmail()) {
            this.signupUser();
        }
    }

    render() {
        return (
            <div className={"box"}>
                <form id="email_subscribe" onSubmit={this.handleFormSubmit}>
                    <div className={"signup_for_updates"}>
                        <br />
                        <center>
                            <h1>Signup for Email Updates</h1>
                        </center>
                        <Box pt={4}>
                            <Grid
                                container
                                direction="row"
                                justify="center"
                                spacing={3}
                            >
                                <Grid item xs={this.state.responsive ? 12 : 6}>
                                    <div className={"asuemail"}>
                                        <ASUEmail
                                            ref={this.emailInput}
                                            email={(email) => {
                                                this.setState({
                                                    email
                                                })
                                            }}
                                            valid={(emailValid) => {
                                                this.setState({
                                                    emailValid
                                                })
                                            }}
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={this.state.responsive ? 12 : 3}>
                                    <Box pt={0.4}>
                                        <div className={"button"}>
                                            <Button theme={"blue"} onClick={this.validateEmail}>Give me email updates</Button>
                                        </div>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </div>
                </form>
            </div>
        )
    }
}