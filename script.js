// JavaScript Functions for Interactivity

// Function to show alert message
function showAlert() {
    alert("Hello! This is a JavaScript alert message. 🚀\n\nThis demonstrates basic JavaScript interaction with the user.");
}

// Function to change background color randomly
function changeBackgroundColor() {
    const colors = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    ];
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;
    
    // Show feedback
    const timeDisplay = document.getElementById('timeDisplay');
    timeDisplay.innerHTML = '🎨 Background color changed!';
    setTimeout(() => {
        timeDisplay.innerHTML = '';
    }, 2000);
}

// Function to display current time
function getCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleString();
    const timeDisplay = document.getElementById('timeDisplay');
    timeDisplay.innerHTML = `⏰ Current time: ${timeString}`;
}

// Function to toggle hidden content
function toggleContent() {
    const hiddenContent = document.getElementById('hiddenContent');
    if (hiddenContent.style.display === 'none') {
        hiddenContent.style.display = 'block';
        hiddenContent.style.animation = 'fadeIn 0.5s ease-in';
    } else {
        hiddenContent.style.display = 'none';
    }
}

// Additional interactive features

// Add hover effects to cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effects to color boxes
    const colorBoxes = document.querySelectorAll('.color-box');
    colorBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const color = this.textContent;
            alert(`You clicked on the ${color} color box! 🎨`);
        });
    });
});

// Smooth scrolling for better user experience
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Console message for developers
console.log('🚀 Welcome to the Web Development Basics Project!');
console.log('This project demonstrates HTML, CSS, and JavaScript fundamentals.');
console.log('Feel free to inspect the code and learn from it!');