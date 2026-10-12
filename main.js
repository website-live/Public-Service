// Basic JavaScript only: mobile menu and safe Google Maps links.
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("#menu-toggle");
  const navigation = document.querySelector("#site-nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    navigation.addEventListener("click", (event) => {
      if (event.target.matches("a")) {
        navigation.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      }
    });
  }

  document.querySelectorAll('a[target="_blank"]').forEach((link) => {
    link.setAttribute("rel", "noopener noreferrer");
  });
});


// Show the remaining services only when the visitor asks for them.
document.querySelectorAll(".view-more").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".service-category");
    const expanded = card.classList.toggle("expanded");
    button.setAttribute("aria-expanded", String(expanded));
    button.innerHTML = expanded ? "Show fewer services <span>↑</span>" : "View more services <span>↓</span>";
  });
});
