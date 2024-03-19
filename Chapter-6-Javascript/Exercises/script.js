document.addEventListener('DOMContentLoaded', function() {
    const calculatorForm = document.getElementById('calculator-form');
    const calculateBtn = document.getElementById('calculate-btn');
    const totalCostParagraph = document.getElementById('total-cost');

    calculateBtn.addEventListener('click', function() {
        // Get the values entered by the user
        const costPerLiter = parseFloat(document.getElementById('cost-per-liter').value);
        const litersPurchased = parseFloat(document.getElementById('liters-purchased').value);

        // Calculate total cost
        const totalCost = costPerLiter * litersPurchased;

        // Display total cost
        totalCostParagraph.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
    });
});
