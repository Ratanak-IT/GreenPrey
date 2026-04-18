(function () {
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
})();

document.addEventListener("DOMContentLoaded", function () {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const mobileThemeToggleBtn = document.getElementById("mobile-theme-toggle");
  const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
  const themeToggleLightIcon = document.getElementById(
    "theme-toggle-light-icon",
  );
  const menuToggleBtn = document.getElementById("mobile-menu-button");
  const closeMenuBtn = document.getElementById("close-menu");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuBackdrop = document.getElementById("mobile-menu-backdrop");

  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    themeToggleLightIcon?.classList.remove("hidden");
  } else {
    themeToggleDarkIcon?.classList.remove("hidden");
  }

  function toggleTheme() {
    themeToggleDarkIcon?.classList.toggle("hidden");
    themeToggleLightIcon?.classList.toggle("hidden");

    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  }

  function openMobileMenu() {
    mobileMenu?.classList.remove("-translate-x-full");
    mobileMenuBackdrop?.classList.remove("hidden");
    menuToggleBtn?.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeMobileMenu() {
    mobileMenu?.classList.add("-translate-x-full");
    mobileMenuBackdrop?.classList.add("hidden");
    menuToggleBtn?.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  function toggleMobileMenu() {
    if (!mobileMenu) return;
    if (mobileMenu.classList.contains("-translate-x-full")) {
      openMobileMenu();
    } else {
      closeMobileMenu();
    }
  }

  menuToggleBtn?.addEventListener("click", toggleMobileMenu);
  closeMenuBtn?.addEventListener("click", closeMobileMenu);

  mobileMenuBackdrop?.addEventListener("click", closeMobileMenu);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMobileMenu();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1024) {
      closeMobileMenu();
    }
  });

  themeToggleBtn?.addEventListener("click", toggleTheme);
  mobileThemeToggleBtn?.addEventListener("click", toggleTheme);
});
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
