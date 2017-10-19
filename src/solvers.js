/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none 
// of them can attack each other

var makeEmptyMatrix = function(n) {
  return _(_.range(n)).map(function() {
    return _(_.range(n)).map(function() {
      return 0;
    });
  });
};

// input - a value setting the dimensions of the chessboard
// output - a matrix with one possibly winning solution on nRooks
window.findNRooksSolution = function(n) {
  var solution = new Board({'n': n}); //fixme
  // debugger;
  console.log('First Solution', solution.rows());
  
  var chessMover = function(row, sol) { 
    
    if ( row === n ) {
      return sol; 
    }
    for ( var col = 0; col < n; col++ ) { 
      console.log("Made it!");
      sol.togglePiece(row, col);
      console.log(solution.rows());
      
      if (sol.hasAnyRooksConflicts()) { 
        sol.togglePiece(row, col);
        
      } else {
        chessMover(row + 1, sol);
        
      }
    }
  };
  //var finalSolution = chessMover(0, solution);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return finalSolution.rows();
  
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
