/**
 * Controller for sending all user related HTTP requests
 */

const axios = require('axios');
const config = require('../../config');
const jwt = require('jsonwebtoken');

const signup = (email, recaptcha) => {
    return new Promise((resolve, reject) => {
        axios.get(config.api + "/signup?email=" + email).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err);
        });
    })
}


const confirm = (token) => {
    return new Promise((resolve, reject) => {
        // Get the email from the token
        const dec = jwt.decode(token);
        if (dec && dec.email) {
            const body = {
                email: dec.email,
                token
            };
            axios.post(config.api + "/membership/confirm", body).then((r) => {
                if (r.data.success) {
                    resolve(r);
                } else {
                    reject(r.data.error);
                }
            }).catch((err) => {
                reject(err);
            });
        } else {
            reject("Invalid token!")
        }
    })
};

module.exports = {
    signup,
    confirm
};