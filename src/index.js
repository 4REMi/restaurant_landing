import './styles.css';
import { displayHome } from './home.js';
import { displayMenu } from './menu.js';
import { displayAbout } from './about.js';
import { displayHours } from './hours.js';

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
