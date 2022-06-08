import { useEffect } from "react";

export const Counter = () => {
  const count = () => { const clockDiv = document.getElementById("countdown");
  const countDownTime = new Date(clockDiv.getAttribute("data-date")).getTime();
  const countdownFunction = setInterval(function () {
    const now = new Date().getTime();
    const diff = countDownTime - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
    const seconds = Math.floor(diff % (1000 * 60) / 1000);

    if (diff < 0) {
      clockDiv.style.display = "none";
      clearInterval(countdownFunction);
    } else {
      clockDiv.querySelector(".days").innerHTML = days;
      clockDiv.querySelector(".hours").innerHTML = hours;
      clockDiv.querySelector(".minutes").innerHTML = minutes;
      clockDiv.querySelector(".seconds").innerHTML = seconds;
    }
  }, 1000);}
  useEffect(
    count()
  )
}