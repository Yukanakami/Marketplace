document.addEventListener('DOMContentLoaded', () => {
  // === SCROLLING BUTTONS ===
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

  // === MOBILE MENU ===
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("flex");
    });
  }

  // === TOGGLE PASSWORD ===
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

  // === FILTER BRAND ===
  window.filterBrand = function (brand) {
    const items = document.querySelectorAll('.product-item');

    items.forEach(item => {
      const itemBrand = item.getAttribute('data-brand');
      item.style.display = (brand === 'all' || itemBrand === brand) ? 'block' : 'none';
    });
  };

  // === ADD TO CART NOTIFICATION ===
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
