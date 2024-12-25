function startCount(id,target) {
    const step = document.getElementById(id);
    step.textContent = "0";
    let current = 0;

    const increment = () => {
      if (current < target) {
        current++;
        step.textContent = current;

        setTimeout(increment, 2);
      }
    };
    increment();
  }

  document.addEventListener("DOMContentLoaded", startCount("current1",228))
  document.addEventListener("DOMContentLoaded", startCount("current2",934))
  document.addEventListener("DOMContentLoaded", startCount("current3",554))