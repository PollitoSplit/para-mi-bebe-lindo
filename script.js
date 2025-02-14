// script.js

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayShot(); // Display the Shot.gif
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "No?"
        document.getElementById('no-button').innerText = 'No?'; 
        // Increase font size of "Si" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Si" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the Quieres.gif initially
function displayQuieres() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the quieres
    var QuieresImage = new Image();
    // Set the source (file path) for the quieres image
    QuieresImage.src = 'Quieres.gif'; // Assuming the quieres image is named "Quieres.gif"
    // Set alternative text for the image (for accessibility)
    QuieresImage.alt = 'Quieres';
    // When the Quieres image is fully loaded, add it to the image container
    QuieresImage.onload = function() {
        imageContainer.appendChild(QuieresImage);
    };
}

// Function to display the Shot.gif
function displayShot() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the Shot
    var ShotImage = new Image();
    // Set the source (file path) for the Shot image
    ShotImage.src = 'Shot.gif'; // Assuming the Shot image is named "Shot.gif"
    // Set alternative text for the image (for accessibility)
    ShotImage.alt = 'Shot';
    // When the Shot image is fully loaded, add it to the image container
    ShotImage.onload = function() {
        imageContainer.appendChild(ShotImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}

// Display the Quieres.gif initially
displayQuieres();
