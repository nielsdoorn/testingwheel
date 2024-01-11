document.addEventListener('DOMContentLoaded', function() {
    const spinButton = document.getElementById('spin-button');
    const resultDiv = document.getElementById('result');
    let questions = [];

    fetch('questions.json')
        .then(response => response.json())
        .then(data => {
            questions = data.questions;
            // Now you can use the assumptions array as needed
        })
    .catch(error => console.error('Error loading questions', error));

    // Draw the wheel
    function drawWheel() {
        // Draw wheel segments and texts
    }

    // Spin the wheel
    function spinWheel() {
        // Add spinning animation and select a random assumption
        let selectedQuestion = questions[Math.floor(Math.random() * questions.length)];
        resultDiv.innerHTML = selectedQuestion;
    }

    // Initial draw
    drawWheel();

    // Event listener for button
    spinButton.addEventListener('click', spinWheel);
});
