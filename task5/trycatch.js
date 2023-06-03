//a try catch and finally code execution example
const numerator= 100, denominator = 'a';

try {
     console.log(numerator/denominator);
     console.log(a);
     //if the input and output is match and right it goes into the try blocks 
}
catch(error) {
    console.log('An error caught'); 
    console.log('Error message: ' + error);  
    //but in case of catch there is some error like we initialize but it is not defined in that case it goes into the catch block .
}
finally {
    //in case of finally  it executes everytime either try or catch is working or not .
     console.log('Finally will execute every time');
}