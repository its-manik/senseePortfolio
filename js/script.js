window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});




const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

function sendMail() {
  let params = {
    name,
    email,
    message,
  };

  if (name.value === "" && email.value === "") {
    alert("Input required fields!");
  } else {
    emailjs.send("service_37hvm5c", "template_ra7m37i", params).then(
      (response) => {
        console.log("I got your message!");
      },
      (error) => {
        console.log("FAILED...");
      }
    );
  }
}
