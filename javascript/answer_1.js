function calculate(x, y, z){
    
    if (z == 0) {
        console.log(`"Can't divide by 0!"`);
    }else{
        let result = eval(x + y + z);
        console.log(result);
        //console.log(typeof(result));
    }
}

calculate(2, "+", 2);
calculate(2, "*", 2);
calculate(4, "/", 2);
calculate(4, "/", 0);
