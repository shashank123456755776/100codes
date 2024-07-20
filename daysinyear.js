function daysInMonth(month, year) {
    // JavaScript months are zero-based (0 = January, 11 = December)
    // Create a Date object for the first day of the next month and subtract one day
    return new Date(year, month, 0).getDate();
}

// Example usage:
const month = 2; // February (0-based)
const year = 2023;
const numberOfDays = daysInMonth(month, year);
console.log(`There are ${numberOfDays} days in the specified month.`);
