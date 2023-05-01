const apiKey = 'a8c76ba01d2c7b018b419422ec66c09d';
const url = `https://api.openweathermap.org/data/2.5/weather?q=College+Station&appid=${apiKey}&units=imperial`;

async function getWeather() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        const temp = data.main.temp + "°";
        const temp_min = data.main.temp_min + "°";
        const temp_max = data.main.temp_max + "°";

        document.getElementById('temp').textContent = temp;
        document.getElementById('lo').textContent = "L: " + temp_min;
        document.getElementById('hi').textContent = "H: " + temp_max;
    } catch (error) {
        console.error(error);
    }
}

getWeather();
