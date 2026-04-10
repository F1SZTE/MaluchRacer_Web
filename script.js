const button = document.querySelector("#spin");
const wheel = document.querySelector("#wheel");
const car = document.querySelector("#car");
const historyList = document.querySelector("#history");

const rewards = [
  "Auto", "$5000", "Nic", "T-shirt", "$25000", "Jeszcze raz",
  "$1000", "$2000", "Buty", "Bonus XP", "$7500", "Piwo Ferdynanta Kiepskiego"
];

const segmentAngle = 360 / rewards.length;

button.addEventListener("click", () => {
  button.disabled = true;
  car.style.left = "0";

  const spins = Math.floor(Math.random() * 10) + 5;
  const randomDeg = Math.floor(Math.random() * 360);
  const totalDeg = spins * 360 + randomDeg;

  wheel.style.transform = `rotate(${totalDeg}deg)`;

  const normalizedDeg = (360 - (randomDeg % 360)) % 360;
  const section = Math.floor(normalizedDeg / segmentAngle);
  const reward = rewards[section];

  wheel.addEventListener("transitionend", () => {
    setTimeout(() => {
      const li = document.createElement("li");
      li.textContent = reward;
      historyList.prepend(li);

      alert("Wygrałeś: " + reward);

      if (reward === "Auto") {
        car.style.left = "100%";
      }

      button.disabled = false;
    }, 500);
  }, { once: true });
});