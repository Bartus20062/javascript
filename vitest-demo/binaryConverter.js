 export class binaryConverter{
    static toBinary(num){
        if(!Number.isInteger(num) || num<0){
            throw new Error("Podana liczba....");
        }
        if (num === 0) return[0];
        let binaryArr = [];
        while(num>0){
            binaryArr.unshift(num % 2);
            num = Math.floor(num / 2);
        }
        return binaryArr;
    }
    static toDecimal(binaryArr){
        if(!Array.isArray(binaryArr) || binaryArr.length === 0 || binaryArr.some(digit => digit !==0 && digit !== 1)){
            throw new Error("Podana wartosc...");
        }
        let decimal = 0;
        let power = 0;
        for(let i = binaryArr.length -1; i>=0;i--){
            decimal += binaryArr[i]*Math.pow(2, power);
            power++;
        }
        return decimal;
    }
    static convertBase(numberArr, fromBase, toBase){
        if(!Array.isArray(numberArr) || numberArr.length === 0 || fromBase< 2 || toBase < 2){
            throw new Error("Nieprawidlowe.....");
        }
        if(numberArr.some(digit => digit < 0 || digit >= fromBase)){
            throw new Error(`Tablica zawiera.... ${fromBase}`);
        }
        let decimal = 0;
        let power = 0;
        for(let i = numberArr.length -1; i>=0;i--){
            decimal += numberArr[i]*Math.pow(fromBase, power);
            power++;
        }
        if(decimal === 0) return[0];
        
        let resultArr = [];
    const digits = "0123456789ABCDEF"; 
    while (decimal > 0) {
      resultArr.unshift(digits[decimal % toBase]);
      decimal = Math.floor(decimal / toBase);
    }
    
    return resultArr;
    }
}
console.log(binaryConverter.toBinary(10));
console.log(binaryConverter.toDecimal([1,0,1,0]));
console.log(binaryConverter.convertBase([1, 5], 10, 16));