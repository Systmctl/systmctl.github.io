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
document.addEventListener('keydown', (e) => {
  buffer += e.key;
  if (buffer.includes('systmctl')) {
    alert('> Access granted. Welcome back, root.');
    buffer = '';
  }
});
