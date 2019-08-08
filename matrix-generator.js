function matrixGenerator(rows, columns) {
  let matrix = [];
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < columns; j++) {
      row.push(Math.floor(Math.random() * 100 + 1));
    }
    row.sort(function(a, b) {
      return a - b;
    });
    matrix.push(row);
  }
  matrix.sort(function(a, b) {
    return a[0] - b[0];
  });
  return matrix;
}

module.exports = matrixGenerator;
