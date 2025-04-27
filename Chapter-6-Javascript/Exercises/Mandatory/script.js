// function to calculate the total petrol cost
function calculateTotal() {
    // fet the values input by the user
    var costPerLiter = parseFloat(document.getElementById('costPerLiter').value);
    var litersPurchased = parseFloat(document.getElementById('litersPurchased').value);

    // calculates the total cost
    var totalCost = costPerLiter * litersPurchased;

    // displays the total cost to the screen, formatted to 2 decimal places
    document.getElementById('totalCost').innerText = "Total Cost: $" + totalCost.toFixed(2);
}