const x = [0, 117.57, 130.95, 153.37]; // x values (distance)
const y = [0, 2874.09, 2170.23, 3167.37]; // y values (price)

// Function to compute the Lagrange interpolation polynomial
function lagrangepolate(x, y, value) {
    let result = 0;
    const n = x.length;

    for (let i = 0; i < n; i++) {
        let term = y[i];
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                term *= (value - x[j]) / (x[i] - x[j]);
            }
        }
        result += term;
    }

    return result;
}


const inputDistance = 140; 
const Price = lagrangepolate(x, y, inputDistance);

console.log(`The interpolated price at distance ${inputDistance} km is: ₱${Price.toFixed(2)}`);
