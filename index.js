const Home = document.getElementById('Home')
const About = document.getElementById('About')
const Writeups = document.getElementById('Writeups')
const Journal = document.getElementById('Journal')

About.addEventListener('click', () => location =  './about.html')
Writeups.addEventListener('click', () => location =  './writeups.html')
Journal.addEventListener('click', () => location =  './journal.html')
Home.addEventListener('click', () => location = "./")