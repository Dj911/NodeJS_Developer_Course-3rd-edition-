const request = require('postman-request')
//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const forecast = (lat, long, callback) => {
    const geocode_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+lat+','+long+'.json?access_token=pk.eyJ1IjoiamV0aGFuOTciLCJhIjoiY2tpeTRmdDlzMHV0YTMxbnhpamwzbDNsMSJ9.ZvOjLK0KXyDdo7bt8PBfvw&language=en&limit=1';
    request({ url: geocode_url, json: true }, (error, response, body) => {
        const data = response.body;
        if (error) {
            callback('Some error through call back',undefined);
        } else if (data.features.length == 0) {
            callback(undefined,'Place is invalid!');
        } else {
            callback(undefined,{
                lattitude: data.features[0].center[1],
                longitude: data.features[0].center[0],
                location: data.features[0].place_name
            })            
        }
    })
}
module.exports = forecast;