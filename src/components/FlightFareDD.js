const x = [0, 117.57, 130.95, 153.37]; // x values (distance)
const y = [0, 2874.09, 2170.23, 3167.37]; // y values (price)

// Function to compute divided differences
function divDiff(x, y) {
    const n = x.length;
    const table = Array.from({ length: n }, () => Array(n).fill(0));

    // Fill the first column with y values
    for (let i = 0; i < n; i++) {
        table[i][0] = y[i];
    }

    // Compute divided differences
    for (let j = 1; j < n; j++) {
        for (let i = 0; i < n - j; i++) {
            table[i][j] = (table[i + 1][j - 1] - table[i][j - 1]) / (x[i + j] - x[i]);
        }
    }

    return table[0];
}

// Function to compute the product term for interpolation
function proterm(value, x, order) {
    let product = 1;
    for (let i = 0; i < order; i++) {
        product *= (value - x[i]);
    }
    return product;
}

// Function to compute the cubic interpolation
function DDpolate(value, x, y) {
    const divDiffValues = divDiff(x, y); 
    let result = divDiffValues[0]; 

    // Compute the sum using the formula
    for (let i = 1; i < x.length; i++) {
        result += divDiffValues[i] * proterm(value, x, i);
    }

    return result;
}

const inputDistance = 140; 
const Price = DDpolate(inputDistance, x, y);

console.log(`The interpolated price at distance ${inputDistance} km is: ₱${Price.toFixed(2)}`);
