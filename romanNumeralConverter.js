//JavaScript Algorithms and Data Structures Project 2 to earn the JavaScript Algorithms and Data Structures certification.
const romanTable = [
    {
        num:1000,
        romanValue:"M"
    },
    {
        num:900,
        romanValue:"CM"
    },
    {
        num:500,
        romanValue:"D"
    },
    {
        num: 400,
        romanValue:"CD"
    },
    {
        num: 100,
        romanValue:"C"
    },
    {
        num:90,
        romanValue:"XC"  
    },
    {
        num:50,
        romanValue:"L"
    },
    {
        num:40,
        romanValue:"XL"
    },
    {
        num:10,
        romanValue:"X"
    },
    {
        num:9,
        romanValue:"IX"
    },
    {
        num:5,
        romanValue:"V"
    },
    {
        num:4,
        romanValue:"IV"
    },
    {
        num:1,
        romanValue:"I"
    }
]
let newNum;
let romanNum = "";
function convertToRoman(num){
    let i=0;
    do{
        do{
            if(romanTable[i].num<=num){
                romanNum += romanTable[i].romanValue;
                newNum=num-romanTable[i].num;
            }
            i++;
        }while(num<romanTable[i-1].num)
        num = newNum;
        i=0;
    }while(num>0);
    num=romanNum;

    return num;
}

console.log(convertToRoman(36))