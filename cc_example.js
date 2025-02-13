function calculateSavings(years, amount) {
    // Base case: If years reach 10, return the savings amount
    if (years >= 10) return amount;
    // Recursive case: Increase savings by 5% each year
    return calculateSavings(years + 1, amount * 1.05);
}

// Test Cases
console.log(`Projected Savings: $${calculateSavings(8, 1000).toFixed(2)}`); // Expected output: "Projected Savings: $1102.50"
console.log(`Projected Savings: $${calculateSavings(5, 5000).toFixed(2)}`); // Expected output: "Projected Savings: $6381.41"

// Task 3:

function add(x, y) {
    return x + y;
}
