import React from 'react';
import { styled } from '@material-ui/styles';
import { TextField, FormControl, FormHelperText } from '@material-ui/core';
// import TheTextField from '@material-ui/core/TextField';
import "../styles/components/ASUEmail.scss";

const crypto = require('crypto');

/**
 * Creates an email field that only accepts
 * ASU emails.
 */
class ASUEmail extends React.Component {

    constructor(props) {
        super(props);
        // Generate a random string because ids need to be unique.
        this.state = {
            'random': crypto.randomBytes(5),
            'helpertext': ''
        }
        this.email = "";
    }

    checkEmail() {
        if (!String(this.email).match("^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?asu\.edu")) {
            // document.getElementById('email-helper-text-' + this.state.random).innerHTML = "Error! Please use your @asu.edu email.";
            this.setState({
                'emailError': true,
                'helpertext': "Error! Please use your @asu.edu email."
            });
            // return false;
            // console.log(this.email);
        } else {
            // console.log("COOL: " + this.email);
            this.setState({
                emailError: false,
                helpertext: "☑️ Looks good! Go ahead and sign up!"
            });
            this.props.email(this.email);
            // this.props.email(document.getElementById('asuemail-' + this.state.random).value);
            // this.props.valid(true);
            // this.setState({
            //     'emailError': false
            // });
            // document.getElementById('email-helper-text-' + this.state.random).innerHTML = "☑️ Looks good! Go ahead and sign up!";
            return true;
        }
    }

    render() {
        return (
            <FormControl fullWidth error={this.state.emailError} success={!this.state.emailError}>
                <div className={"white"}>
                    <TextField
                        id={"asuemail-" + this.state.random}
                        error={this.state.emailError}
                        placeholder={"Enter your asu.edu email here!"}
                        fullWidth
                        type="email"
                        variant="outlined"
                        color="white"
                        required
                        onChange={(e) => {this.email = e.target.value; this.checkEmail()}}
                        aria-describedby={"email-helper-text-" + this.state.random}
                    />
                    <FormHelperText id={"email-helper-text-" + this.state.random}>{this.state.helpertext}</FormHelperText>
                </div>
            </FormControl>
        )
    }

}

export default ASUEmail;