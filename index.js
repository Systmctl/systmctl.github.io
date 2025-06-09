const Home = document.getElementById('Home')
const About = document.getElementById('About')
const Writeups = document.getElementById('Writeups')
const Journal = document.getElementById('Journal')

About.addEventListener('click', () => window.location.href =  './about.html')
Writeups.addEventListener('click', () => window.location.href =  './writeups.html')
Journal.addEventListener('click', () => window.location.href =  './journal.html')
Home.addEventListener('click', () => window.location.href = "./")

const path = window.location.pathname;

let buffer = '';
const easterEggSound = new Audio('./sounds/1.mp3');

document.addEventListener('keydown', (e) => {
  buffer += e.key.toLowerCase();

  if (buffer.includes('systmctl')) {
    easterEggSound.play();
    alert('> Access granted. Welcome back, root.');
    document.body.style.transition = "0.1s";
    let i = 0;
    const glitchInterval = setInterval(() => {
    document.body.style.transform = `rotate(${(Math.random() - 0.5) * 1.5}deg)`;
    document.body.style.filter = `contrast(${1 + Math.random() * 0.5})`;
    if (++i > 10) {
      clearInterval(glitchInterval);
      document.body.style.transform = "rotate(0deg)";
      document.body.style.filter = "none";
    }
  }, 100);
    buffer = '';
  }
  if (buffer.length > 20) buffer = buffer.slice(-10);
});
