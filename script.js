async function fetchData(city) {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '53dc853031mshe5288cb6ac2e1c1p153fa4jsn2eee5a7cab05',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json(); // Parse the JSON response

        // Update HTML content with response data
        document.getElementById('cityName').innerHTML = city;
        document.getElementById('cloud_pct').innerHTML = data.cloud_pct;
        document.getElementById('temp').innerHTML = data.temp;
        document.getElementById('temp2').innerHTML = data.temp;
        document.getElementById('feels_like').innerHTML = data.feels_like;
        document.getElementById('humidity').innerHTML = data.humidity;
        document.getElementById('humidity2').innerHTML = data.humidity;
        document.getElementById('min_temp').innerHTML = data.min_temp;
        document.getElementById('max_temp').innerHTML = data.max_temp;
        document.getElementById('wind_speed').innerHTML = data.wind_speed;
        document.getElementById('wind_speed2').innerHTML = data.wind_speed;
        document.getElementById('wind_degrees').innerHTML = data.wind_degrees;
        document.getElementById('sunrise').innerHTML = data.sunrise;
        document.getElementById('sunset').innerHTML = data.sunset;

        const weatherDataElement = document.getElementById('weatherData');
        weatherDataElement.innerHTML = `
            <tr>
                <th scope="row" class="text-start">${city}</th>
                <td>${data.cloud_pct}</td>
                <td>${data.temp}°C</td>
                <td>${data.feels_like}</td>
                <td>${data.humidity}</td>
                <td>${data.min_temp}</td>
                <td>${data.max_temp}</td>
                <td>${data.wind_speed}</td>
                <td>${data.wind_degrees}</td>
                <td>${data.sunrise}</td>
                <td>${data.sunset}</td>
            </tr>
        `;


        console.log(data); // Log the parsed data
    } catch (error) {
        console.error(error);
    }
}

const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
    e.preventDefault(); //use this function to stop reloading the page
    const city = document.getElementById("city").value;
    fetchData(city);
});

// Initial call with default city
fetchData();
