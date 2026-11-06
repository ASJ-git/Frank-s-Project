// Mobile menu
const menu = document.querySelector('.menu');
const links = document.querySelector('.links');
if (menu) {
  menu.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    menu.setAttribute('aria-expanded', open);
  });
}

// Tabs (anxiety levels)
document.querySelectorAll('[role=tablist]').forEach((list) => {
  const tabs = list.querySelectorAll('[role=tab]');
  tabs.forEach((tab) =>
    tab.addEventListener('click', () => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute('aria-selected', on);
        document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      });
    }),
  );
});

// Breathing guide: in for 4s, out for 6s
const orb = document.getElementById('orb');
const btn = document.getElementById('breathBtn');
const label = document.getElementById('breathLabel');
if (orb && btn) {
  let timer = null;
  const cycle = () => {
    orb.style.transitionDuration = '4s';
    orb.classList.add('in');
    label.textContent = 'Breathe in';
    timer = setTimeout(() => {
      orb.style.transitionDuration = '6s';
      orb.classList.remove('in');
      label.textContent = 'Breathe out';
      timer = setTimeout(cycle, 6000);
    }, 4000);
  };
  btn.addEventListener('click', () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
      orb.classList.remove('in');
      label.textContent = 'Ready when you are';
      btn.textContent = 'Start breathing exercise';
    } else {
      cycle();
      btn.textContent = 'Stop';
    }
  });
}

// Footer year
document
  .querySelectorAll('.year')
  .forEach((y) => (y.textContent = new Date().getFullYear()));
