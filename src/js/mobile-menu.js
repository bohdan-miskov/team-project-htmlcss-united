(()=>{const e={openMobileMenuBtn:document.querySelector("[data-mobileMenu-open]"),closeMobileMenuBtn:document.querySelector("[data-mobileMenu-close]"),mobileMenuLinks:document.querySelectorAll(".mobile-menu-nav-link"),mobileMenuBtn:document.querySelector(".mobile-menu-shop-btn"),mobileMenu:document.querySelector("[data-mobileMenu]")};function n(){e.mobileMenu.classList.toggle("is-open")}e.openMobileMenuBtn.addEventListener("click",n),e.closeMobileMenuBtn.addEventListener("click",n),e.mobileMenuLinks.forEach(e=>{e.addEventListener("click",n)}),e.mobileMenuBtn.addEventListener("click",n)})();