/**
 * Controller for sending all event related HTTP requests
 */

const axios = require('axios');
const config = require('../../config');
const jwt = require('jsonwebtoken');

const get = () => {
    return new Promise((resolve, reject) => {
        axios.get(config.api + "/events").then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err);
        });
    });
}

const getEvent = (id) => {
    return new Promise((resolve, reject) => {
        axios.get(config.api + "/events?id=" + id).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err);
        });
    });
}

const getRSVP = (id, token) => {
    return new Promise((resolve, reject) => {
        axios.get(config.api + "/events/rsvp/response?id=" + id + "&token=" + token).then((res) => {
            if (res.data.success == true) {
                resolve(res.data.rsvp);
            } else {
                reject(res.data.error);
            }
        }).catch((err) => {
            reject(err);
        });
    });
}

const rsvp = (id, token) => {
    return new Promise((resolve, reject) => {
        // Get the email from the token
        const dec = jwt.decode(token);
        if (dec && dec.email && id) {
            axios.get(config.api + "/events/rsvp?id="+id+"&token="+token).then((r) => {
                if (r.data.success) {
                    resolve(r.data);
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
}

module.exports = {
    get,
    getEvent,
    rsvp,
    getRSVP
}