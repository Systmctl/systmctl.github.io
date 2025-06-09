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
const easterEggSound = new Audio('./sounds/AccessGrantedSound.mp3');

document.addEventListener('keydown', (e) => {
  buffer += e.key.toLowerCase();

  if (buffer.includes('systmctl')) {
    easterEggSound.play();
    alert('> Access granted. Welcome back, root.');
    buffer = '';
  }

  if (buffer.length > 20) buffer = buffer.slice(-10);
});
