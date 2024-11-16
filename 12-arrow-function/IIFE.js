// Immediately Invoked Function Exression

// Normal Function Invocation
// This is called Named IIFE.
function info(){
    console.log('Information sent successfully');
}
info();

// Unnamed IIFE.
(function dataInfo(){
    console.log('Data Information sent successfully');
})();

// () -> first paranthesis for function wrapping, ()-> second paranthesis for function invocation like info, but here, we do just () paranthesis
// IIFE should always be end with a semicolon.
( ()=>{
    console.log("Hello, User!");  
})();

( (userName)=>{
    console.log(`Hello ${userName}`);  
})('Max');