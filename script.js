document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("popularContainer");

  document.getElementById("scrollLeftBtn").addEventListener("click", function () {
    container.scrollBy({ left: -300, behavior: "smooth" });
  });

  document.getElementById("scrollRightBtn").addEventListener("click", function () {
    container.scrollBy({ left: 300, behavior: "smooth" });
  });

});

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("newContainer");

  document.getElementById("scrollkiributon").addEventListener("click", function () {
    container.scrollBy({ left: -300, behavior: "smooth" });
  });

  document.getElementById("scrollkananbuton").addEventListener("click", function () {
    container.scrollBy({ left: 300, behavior: "smooth" });
  });

});
const hamburger = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  mobileMenu.classList.toggle('hidden');
});

function togglePassword() {
  const passwordInput = document.getElementById("password");
  const eyeIcon = document.getElementById("eyeIcon");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.src = "all_logo/eyesclose.png"; 
  } else {
    passwordInput.type = "password";
    eyeIcon.src = "all_logo/eyesopen.png";
  }
}

function togglePassword(inputId, iconId) {
  const passwordInput = document.getElementById(inputId);
  const eyeIcon = document.getElementById(iconId);

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.src = "all_logo/eyesclose.png";
  } else {
    passwordInput.type = "password";
    eyeIcon.src = "all_logo/eyesopen.png";
  }
}



