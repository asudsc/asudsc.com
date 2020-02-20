/**
 * Controller for communicating with the events api
 */

const axios = require('axios');
const config = require('../../config');

const getEvents = () => {
    return new Promise((resolve, reject) => {
        axios.get(config.events_api + "/getEvents").then((res) => {
            resolve(res.data.events);
        }).catch((err) => {
            reject(err);
        });
    });
}

const rsvpWithEmail = (event_id, email) => {
    return new Promise((resolve, reject) => {
        axios.post(config.events_api + "/rsvp", {
            event_id,
            email
        }).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });
    });
}

const rsvpWithEmailAndASUID = (event_id, email, asu_id) => {
    return new Promise((resolve, reject) => {
        axios.post(config.events_api + "/rsvp", {
            event_id,
            email,
            asu_id
        }).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });
    });
}

module.exports = {
    getEvents,
    rsvpWithEmail,
    rsvpWithEmailAndASUID
}