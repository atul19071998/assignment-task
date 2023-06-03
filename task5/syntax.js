//code for syntax error -  An exception caused by the incorrect use of a pre-defined syntax. Syntax errors are detected while compiling or parsing source code.

// in the above example of syntax error  generally the console.log bracket ) is not closed hence it gives the syntax error and it shows that something is missing.
function syntaxErrorExample() {
    var x = 5;
    var y = 10;
    var z = x + y;
  
    console.log(z
  }

  syntaxErrorExample();