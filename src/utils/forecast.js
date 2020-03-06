const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/fb99c86bdfc530d93b98010a822e956d/' + latitude + ',' + longitude + '?units=si';
    request({ url: url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to location services!', undefined);
        } else if(body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, 
                `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. 
Max temperature: ${body.daily.data[0].temperatureHigh} degrees. 
Min temperature: ${body.daily.data[0].temperatureLow} degrees. 
There is a ${body.currently.precipProbability} % chance of rain.`)
        }
    })
}

module.exports = forecast