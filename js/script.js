document.addEventListener('DOMContentLoaded', () => {
  
  const popularContainer = document.getElementById("popularContainer");
  if (popularContainer) {
    document.getElementById("scrollLeftBtn")?.addEventListener("click", () => {
      popularContainer.scrollBy({ left: -300, behavior: "smooth" });
    });

    document.getElementById("scrollRightBtn")?.addEventListener("click", () => {
      popularContainer.scrollBy({ left: 300, behavior: "smooth" });
    });
  }

  const newContainer = document.getElementById("newContainer");
  if (newContainer) {
    document.getElementById("scrollkiributon")?.addEventListener("click", () => {
      newContainer.scrollBy({ left: -300, behavior: "smooth" });
    });

    document.getElementById("scrollkananbuton")?.addEventListener("click", () => {
      newContainer.scrollBy({ left: 300, behavior: "smooth" });
    });
  }

  
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("flex");
    });
  }

 
  window.togglePassword = function (inputId, iconId) {
    const passwordInput = document.getElementById(inputId);
    const eyeIcon = document.getElementById(iconId);

    if (passwordInput && eyeIcon) {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.src = "all_logo/eyesclose.png";
      } else {
        passwordInput.type = "password";
        eyeIcon.src = "all_logo/eyesopen.png";
      }
    }
  };

  const addToCartBtn = document.querySelector('#addToCartBtn');
  const notification = document.querySelector('#cartNotification');

  if (addToCartBtn && notification) {
    addToCartBtn.addEventListener('click', () => {
      notification.classList.remove('hidden');

      setTimeout(() => {
        notification.classList.add('hidden');
      }, 2500);
    });
  } else {
    console.warn('❗️ Element tombol atau notifikasi tidak ditemukan di halaman ini');
  }
});

window.filterBrand = function (brand) {
  const items = document.querySelectorAll('.product-item');

  items.forEach(item => {
    const itemBrand = item.getAttribute('data-brand');
    if (brand === 'all' || itemBrand === brand) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
};

