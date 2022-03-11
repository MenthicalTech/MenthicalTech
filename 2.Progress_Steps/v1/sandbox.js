// JavaScript By Mentor Buteyo

// Constant Variable Declaration
const steps = document.querySelectorAll('.step');
const progress = document.querySelector('.progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

// Active Class min value
let activeClass = 1;

// Next Button Functions 
next.addEventListener('click', () => {
    activeClass++;

    if (activeClass > steps.length) {
        activeClass = steps.length;
    }

    update();
});


// Prev Button Functions
prev.addEventListener('click', () => {
    activeClass--;

    if (activeClass < 1) {
        activeClass = 1;
    }

    update();
});

// Update Function 
function update() {

    // Adding Active Classes
    steps.forEach((step, idx) => {
        if (activeClass > idx) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    })

    // Active Classes Declaration
    const actives = document.querySelectorAll('.active');

    // Progress Bar Function
    progress.style.width = (actives.length - 1) / (steps.length - 1) * 100 + '%';

    // Button Disabled Function
    if (activeClass == 1) {
        prev.disabled = true;
    } else if (activeClass == steps.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}