document.addEventListener('DOMContentLoaded', function() {
    const spinButton = document.getElementById('spin-button');
    const resultDiv = document.getElementById('result');
    let assumptions = [];

    fetch('assumptions.json')
        .then(response => response.json())
        .then(data => {
            assumptions = data.assumptions;
            // Now you can use the assumptions array as needed
        })
    .catch(error => console.error('Error loading assumptions:', error));

    
    

    // Draw the wheel
    function drawWheel() {
        // Draw wheel segments and texts
    }

    // Spin the wheel
    function spinWheel() {
        // Add spinning animation and select a random assumption
        let selectedAssumption = assumptions[Math.floor(Math.random() * assumptions.length)];
        resultDiv.innerHTML = 'Selected Assumption: ' + selectedAssumption;
    }

    // Initial draw
    drawWheel();

    // Event listener for button
    spinButton.addEventListener('click', spinWheel);
});
