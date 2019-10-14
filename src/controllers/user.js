/**
 * Controller for sending all user related HTTP requests
 */

const axios = require('axios');
const config = require('../../config');

const signup = (email, recaptcha) => {
    return new Promise((resolve, reject) => {
        axios.get(config.api + "/signup?email=" + email).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err);
        });
    })
}

module.exports = {
    signup
};