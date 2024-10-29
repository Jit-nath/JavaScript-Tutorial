// concept of functions

function eat() {
    console.log("I am eating");
}
function amIEating(item) {
    if (item == "apple") {
        console.log("Yes, I am eating");
    }
    else {
        console.log("No, I am eating nothing");
    }
}

function isAdult(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}

const age = isAdult(30)

console.log(age);



const fnc = () => {
    console.log("this is a arrow function");
}

fnc();

fnc; // bracket less function

// <button onClick ="fnc"></button> immidiately invoked expression