// not working in windows but in Mac
// need simulation with running speed setting -- use Xcode in Mac
const arrow = document.querySelector(".arrow");
const speedValue = document.querySelector(".speed-value");

navigator.geolocation.watchPosition(
  // incase user gives permission
  (data) => {
    console.log(data);
    speedValue.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  },
  // if user defined this runs, like promise
  (error) => {
    alert("Please,give Permission for speed and direction to display");
  }
);
