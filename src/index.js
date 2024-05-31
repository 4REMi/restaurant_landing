import './styles.css';
import { displayHome } from './home.js';
import { displayMenu } from './menu.js';
import { displayAbout } from './about.js';
import { displayHours } from './hours.js';
import './pic2.JPG';
import './instagram.webp';
import './check.png';
import "./facebook.webp";
import "./instagram.webp";
import "./location.png";
import "./logo.png";
import "./logo1.svg";
import "./logo2.svg";
import "./logo3.svg";
import "./logo4.svg";
import "./restaurant.webp";
import "./twitter.png";
import "./videoHero.mp4";
import "./lasagna.svg";


document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');
    const homeButton = document.getElementById('homeBtn');
    const hoursButton = document.getElementById('hoursBtn');
    const menuButton = document.getElementById('menuBtn');
    const aboutButton = document.getElementById('aboutBtn');

    homeButton.addEventListener('click', () => {
        contentDiv.innerHTML = '';
        contentDiv.appendChild(displayHome());
    });

    hoursButton.addEventListener('click', () => {
        contentDiv.innerHTML = '';
        contentDiv.appendChild(displayHours());
    });

    menuButton.addEventListener('click', () => {
        contentDiv.innerHTML = '';
        contentDiv.appendChild(displayMenu());
    });

    aboutButton.addEventListener('click', () => {
        contentDiv.innerHTML = '';
        contentDiv.appendChild(displayAbout());
    });

    // Optionally, display the home page content by default
    contentDiv.appendChild(displayHome());
});
