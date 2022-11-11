const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const lenEl = document.getElementById("len-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

convertBtn.addEventListener("click", function () {
    console.log("clicked")
    let num = inputEl.value;
    if (num >= 0) {
        render(num)
    }
    else {
        alert("Please enter a valid number")
    }
});

function render(num) {
    let meterTofeet = num * 3.281;
    let feetTometer = num / 3.281;
    let literTogallon = num * 0.264;
    let gallonToliter = num / 0.264;
    let kiloTopound = num * 2.204;
    let poundTokilo = num / 2.204;

    lenEl.innerHTML = `${num} meters = ${meterTofeet.toFixed(3)} feet | ${num} feet = ${feetTometer.toFixed(3)} meters`
    volumeEl.innerHTML = `${num} liters = ${literTogallon.toFixed(3)} gallons | ${num} gallons = ${gallonToliter.toFixed(3)} liters`
    massEl.innerHTML = `${num} kilos = ${kiloTopound.toFixed(3)} | ${num} pounds = ${poundTokilo.toFixed(3)} kiloss`
}



