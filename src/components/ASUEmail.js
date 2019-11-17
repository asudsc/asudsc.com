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
            'random': crypto.randomBytes(5)
        }
    }

    checkEmail() {
        if (!document.getElementById('asuemail-' + this.state.random).value.match("^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?asu\.edu")) {
            document.getElementById('email-helper-text-' + this.state.random).innerHTML = "Error! Please use your @asu.edu email.";
            this.setState({
                'emailError': true
            });
            // Activate realtime checking if they messed up the first time
            document.getElementById('asuemail-' + this.state.random).oninput = () => {
                this.checkEmail();
            }
            return false;
        } else {
            this.props.email(document.getElementById('asuemail-' + this.state.random).value);
            this.props.valid(true);
            this.setState({
                'emailError': false
            });
            document.getElementById('email-helper-text-' + this.state.random).innerHTML = "☑️ Looks good! Go ahead and sign up!";
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
                        onChange={() => {
                            this.props.email(document.getElementById('asuemail-' + this.state.random).value)
                        }}
                        aria-describedby={"email-helper-text-" + this.state.random}
                    />
                    <FormHelperText id={"email-helper-text-" + this.state.random}> </FormHelperText>
                </div>
            </FormControl>
        )
    }

}

export default ASUEmail;