document.getElementById("currentyear").textContent = "©" + new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified : " + document.lastModified;


let temperature = 10;
let windSpeed = 5;


function calculateWindChill(temp, wind) {
    if ((temp <= 10 && wind > 4.8)) {

        return (13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16))).toFixed(1);
    } else {
        return "N/A";
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const windChillElement = document.querySelector('.Weather_Content ul li:nth-child(4)');

    const windChill = calculateWindChill(temperature, windSpeed);


    if (windChill === "N/A") {
        windChillElement.textContent = `Wind chill: N/A`;
    } else {
        windChillElement.textContent = `Wind chill: ${windChill} °C`;
    }
});
