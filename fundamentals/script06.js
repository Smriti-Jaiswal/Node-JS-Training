function greet(userName){
    return "Hello " + userName;
}

const timelyGreet = function(userName) {
    let h = (new Date()).getHours();

    let greeting="";

    if(h>=3 && h<=11) greeting="Good Morning";
    else if(h>=12 && h<=16) greeting="Good Noon";
    else greeting="Good Evening";

    return greeting + " " + userName;
}

function welcomeUser(userName,wishOperation){
    console.log(wishOperation(userName) + " , you are heartly welcome onboard!")
}

welcomeUser("Vamsy",greet);
welcomeUser("Vamsy",timelyGreet);