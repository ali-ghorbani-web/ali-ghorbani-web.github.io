function startCount(id, target) {
  const step = document.getElementById(id);
  step.textContent = "0";
  let current = 0;

  const increment = () => {
    if (current < target) {
      current++;
      step.textContent = current;

      setTimeout(increment, 0.5);
    }
  };
  increment();
}

document.addEventListener("DOMContentLoaded", startCount("current1", 228));
document.addEventListener("DOMContentLoaded", startCount("current2", 934));
document.addEventListener("DOMContentLoaded", startCount("current3", 554));

// scroll navbar
let navbar = document.querySelector(".navbar");

document.addEventListener("scroll", function () {
  if (Math.floor(document.documentElement.scrollTop) >= 120) {
    navbar.classList.add("scroll-nav");
  } else {
    navbar.classList.remove("scroll-nav");
  }
});
