const sumArray = (array) => array.reduce((sum, number) => sum + number, 0);

const getArraysFromColumns = (matrix) => {
    const arrays = [];

    for(const position in matrix) {
        arrays.push(matrix.map((row) => row[position]));
    }
    
    return arrays;
};

const getArraysFromGrids = (matrix) => {
    const newMatrix = [];
    let startIndexRows = 0;
    for(let indexColumn = 0; indexColumn <= 6; indexColumn+=3){
        const gridArray = [];
        for(let indexRow = startIndexRows; indexRow < startIndexRows + 3; indexRow++){
            const aux = matrix[indexRow].slice(indexColumn, indexColumn + 3);
            gridArray.push(...aux);
        }
        startIndexRows += 3;

        if(startIndexRows < 9){
            indexColumn -= 3;
        }else {
            startIndexRows = 0;
        }

        newMatrix.push(gridArray);
    }

    return newMatrix;
};

const verifyMatrix = (matrix) => {
    for(const row of matrix){
        if((new Set(row)).size < 9){
            return false;
        }
    }

    return true;
};


const validateSolution = (solution) => 
    verifyMatrix(solution) && 
    verifyMatrix(getArraysFromColumns(solution)) && 
    verifyMatrix(getArraysFromGrids(solution));

module.exports = validateSolution;