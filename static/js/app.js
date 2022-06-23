function checker(usernum, randomnum)
{
    if(usernum == randomnum)
    {
        return true;
    }else {
        return false;
    }
}

function randomNumber()
{
    let random = Math.floor(Math.random() * 11);
    return random;
}
let random = randomNumber();


function getUserNumber()
{
    let number = document.getElementById("userNumber").value;
    try{
        if(number.length > 0)
        {
            let numberInt = parseInt(number);
        if(typeof(numberInt) === 'number')
        {
            let fails = 0;
            let life = 1;

            let usernumber = numberInt;

            let isCorrectAnswer = checker(usernumber, random);
            if(isCorrectAnswer === true)
            {
                alert("Ganaste!!!");
                location.reload();
          }else {
            fails += 1;
            life -=1;
            if(life == 0 && fails == 1)
            {
                alert("Perdiste :(");
                location.reload();
            }
          }
        }else{
            alert("Error!");
        }
      }else{
        alert("Error! Ingresa un número!")
      }
    }catch(e){
        alert("Error!");
    }
}