// <!-- Display the countdown timer in an element -->
// <p id="demo"></p>

// <script>
// Set the date we're counting down to
// let countDownDate = new Date("Jun 22, 2022 15:37:25").getTime();

// // Update the count down every 1 second
// const x = setInterval(function() {

//   // Get today's date and time
//   const now = new Date().getTime();

//   // Find the distance between now and the count down date
//   const distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);
export const Faq = () => {
    const faq = document.getElementsByClassName("faq-page");
    let i;
    for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        this.classList.toggle("active");
        const body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}}

