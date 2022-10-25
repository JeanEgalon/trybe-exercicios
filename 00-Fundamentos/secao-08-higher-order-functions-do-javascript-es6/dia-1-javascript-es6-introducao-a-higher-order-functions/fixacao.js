const wakeUp = () => 'Acordando!!';
// console.log(wakeUp());

const drinkCafe = () => 'Bora tomar café!!';
// console.log(drinkCafe());

const goSleep = () => 'Partiu dormir!!';
// console.log(goSleep());

const doingThings = (func) => func();
console.log(doingThings(goSleep));
