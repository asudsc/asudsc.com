/**
 * Controller for sending all event related HTTP requests
 */

const axios = require('axios');
const config = require('../../config');

const get = () => {
    return new Promise((resolve, reject) => {
        axios.get(config.api + "/events").then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err);
        });
    });
}

module.exports = {
    get
}