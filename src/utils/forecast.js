const request = require('request');

const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/fb99c86bdfc530d93b98010a822e956d/' + longitude + ',' + latitude + '?units=si';
    request({ url: url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to location services!', undefined);
        } else if(body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, 
                body.daily.data[0].summary + ' It is currently ' 
                + body.currently.temperature + ' degrees out. There is a ' 
                + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast