  
// my-script.js


function fun() {

    document.getElementById("some").innerHTML = "Some other text";

    num = 10;
    console.log('1 from external Script. ' + num);
    console.log("2 from external Script. " + num);
    console.log(`3 from external Script. ${num}`);
    console.log("Hello");
    
    // alert("You clicked a button!");
}

// fun();