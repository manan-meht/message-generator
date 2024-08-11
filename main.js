let message;
let randomNum = Math.floor(Math.random()*10);
switch (randomNum) {
    case 0:
        message = "It takes a lot of balls to golf the way I do.";
        break;
    case 1:
        message = "My wife told me to stop impersonating a flamingo. I had to put my foot down.";
        break;
    case 2:
         message = "I went to buy some camo pants but couldn\'t find any.";
        break;
    case 3:
        message = "I failed math so many times at school, I can\'t even count.";
        break; 
    case 4:
        message = "I used to have a handle on life, but then it broke.";
        break;
    case 5:
            message = "I was wondering why the frisbee kept getting bigger and bigger, but then it hit me.";
        break;
    case 6:
        message = "I heard there were a bunch of break-ins over at the car park. That is wrong on so many levels.";
        break;
    case 7:
        message = "I want to die peacefully in my sleep, like my grandfather… Not screaming and yelling like the passengers in his car.";
        break;
    case 8:
            message = "When life gives you melons, you might be dyslexic.";
        break;
    case 9:
        message = "Don\'t you hate it when someone answers their own questions? I do.";
        break;  
};

console.log(message);
