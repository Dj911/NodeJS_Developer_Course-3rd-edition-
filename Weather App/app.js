const request = require('postman-request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast-challenge');

const command =process.argv[2];

if(command){
    geocode(command, (error, data) => {
        if(error){
            return console.log('Error', error)
        }    
        forecast(data.latitude, data.longitude, (error, fData) => {
            if(error){
                return console.log('Error', error)
            }           
            console.log(data.location)
            console.log(fData.location);
        })
    })
}else{
    console.log('ERROR!! PLEASE ENTER VALID LOCATION!!')
}