// herhaling Loops
const pennywiseYearsHibernate = 27;
const pennywiseYearLastSeen = 1984;
let currentYear = 2019
 
 for (let i = pennywiseYearLastSeen; i < 4000; i += pennywiseYearsHibernate) {
    if (i > currentYear) {
        console.log(`Pennywise appears in the year: ${i}`);
        let yearsUntillAppearance = i - currentYear;
        console.log(`${yearsUntillAppearance} years untill Pennywise appears again!`);
        break;
    }
 } 
 
// Functions
showColors(0xff0000);
showColors(0x00ff00);
showColors(0x0000ff);
showColors(0xff3399);
function showColors(Color: any) {

    light.setAll(Color);

    control.waitMicros(1000000);

}

createFullName("Bas", "v.d. Meijden");

function createFullName(FirstName: string, LastName: string) {
    console.log(`Hallo, ${FirstName} ${LastName}!`);
}

addNumbers(3, 5);

function addNumbers(FirstNum: number, LastNum: number) {
    let Total = FirstNum + LastNum;
    console.log(Total);
}

let NewNum = RetAdded(4, 5);
console.log(NewNum);

function RetAdded(FirstNum: number, LastNum: number) {
    let Total = FirstNum + LastNum;
    return Total;
}
