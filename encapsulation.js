let employee = {
    baseSalary: 30000,
    overtime: 10,
    rate: 10,
    getWage : function(){
        return this.baseSalary + (this.overtime*this.rate);
    }
};

console.log(employee.getWage());
// there are a very big different betwene
/*
    let baseSalary  = 30000;
    let overTime = 10;
    let rate = 10;

    function getWage(baseSalary,overtime,rate){
        return baseSalary + (overtime * rate);
    }

    the best function are those has no parameters
*/