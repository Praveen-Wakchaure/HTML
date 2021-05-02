/*
 const fun = () => {
     setTimeout(() => {
             return { num: 10 };
         }
        , 3000);
};
 
const funCall = fun();
 
 console.log(funCall.num);*/
 
// 1. solution with callback 
 
const fun = (arg) => {
    setTimeout(() => {
        arg({
            num: 10
        });
    }
        , 3000);
};
 
fun(funCall => {
    console.log(funCall.num);
});