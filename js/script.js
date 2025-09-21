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
let underLineNav = document.querySelector(".underline");

const customScroll = () => {
  let scrollTopUser = window.scrollY;
  let clientHeight = document.body.clientHeight;
  let innerHeight = window.innerHeight;

  return Math.floor((scrollTopUser / (clientHeight - innerHeight)) * 100);
};

document.addEventListener("scroll", function () {
  if (Math.floor(document.documentElement.scrollTop) >= 120) {
    navbar.classList.add("scroll-nav");
    underLineNav.style.width = customScroll() + "%";
  } else {
    navbar.classList.remove("scroll-nav");
    underLineNav.style.width = '100%'
  }
});
