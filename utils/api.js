const axios = require('axios');

//example from axios
//https://www.npmjs.com/package/axios#example

const api = {
    getUser(username) {
        const queryURL = `https://api.github.com/users/${username}`;
        axios.get(queryURL)
            .then(response => {
                const data = response.data;
            })
            .catch(err => {
                if (err) throw Error;
            })
    }
};

module.exports = api;