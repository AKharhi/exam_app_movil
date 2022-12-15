const weatherApiKey = "dc46d389e0ac4b26a94114800221305";

$(document).ready(function () {

    if('geolocation' in navigator) {
        /* geolocation is available */
        console.log("available")
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
            $.get(`https://api.weatherapi.com/v1/current.json?q=${position.coords.latitude},${position.coords.longitude}&key=${weatherApiKey}`, 
            function(data) {
                console.log(data)
                $('#weather').html(`
                    <div class="weather">
                        <div>
                        <p>La temperatura en ${data.location.name}, ${data.location.country}</p>
                        es de ${data.current.temp_c}°C <img src="https:${data.current.condition.icon}"/></p>
                        </div>
                    </div>
                `);
            })
        });
    } else {
        /* geolocation IS NOT available */
        console.log("not available")
    }

    
});
