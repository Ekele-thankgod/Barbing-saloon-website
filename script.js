// // Select the hoverable element
// const textButton = document.getElementById('hoverLink');

// // Add a click event listener
// textButton.addEventListener('click', () => {
//     // Redirect to the services page
//     window.location.href = 'services.html';
// });

// // Optional: Add a hover event (not necessary for most cases but included as an example)
// textButton.addEventListener('mouseover', () => {
//     console.log('Hovered over the link!');
// });

 
const hamburger = document.getElementById("hamburger");
const backside = document.getElementById("close-nav");
const navs = document.getElementById("navbars");

const sidebarCheckbox = document.getElementById("sidebar-active");



// backside.addEventListener('click', () => {
    
// });

hamburger.addEventListener('click', () => {
    navs.classList.add('visibility'); // Show navbar
    hamburger.classList.add('hidden'); // Hide hamburger
    sidebarCheckbox.checked = true;
});

backside.addEventListener('click', () => {
    navs.classList.remove('visibility'); // Hide navbar
    hamburger.classList.remove('hidden'); // Show hamburger
    sidebarCheckbox.checked = false;
});