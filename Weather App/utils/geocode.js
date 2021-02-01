const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiamV0aGFuOTciLCJhIjoiY2tpeTRmdDlzMHV0YTMxbnhpamwzbDNsMSJ9.ZvOjLK0KXyDdo7bt8PBfvw&language=en&limit=1';

    request({ url: url, json: true }, (error, response) => {
        const data = response.body;
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (data.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode