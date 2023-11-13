document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('wheel');
    const context = canvas.getContext('2d');
    const spinButton = document.getElementById('spin-button');
    const resultDiv = document.getElementById('result');
    const assumptions = [
        "User Interface is Intuitive",
        "Happy Path Only",
        "No Need for Documentation",
        "One Environment Fits All",
        "Limited User Personas",
        "Performance is Not a Priority",
        "Security is an Afterthought",
        "Users Will Report Bugs",
        "Complete Automation is Feasible",
        "No Edge Cases",
        "Localization is Easy",
        "Infrequent Releases Are Safer",
        "No Need for Regression Testing",
        "Data Privacy is Not Crucial",
        "Users Have High-End Devices",
        "Accessibility is Optional",
        "One Browser is Enough",
        "Minimal User Input Variation",
        "No Concurrent Users",
        "Quick Fixes Are Effective"
    ];
    

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
