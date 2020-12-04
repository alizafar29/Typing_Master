var sentence,sentence1,word=0,char,char1,charLength,paraValue,
    userValue,result,errorCount=0,leftTime=60,ref=0;

/* Retriew data which is alrealy show to the User in the Para. */
sentence = document.getElementById('para').innerHTML;
sentence = sentence.trim();
sentence1 = sentence.split(' ')

/* Count function retriew the data from the user Input */
function count(){
   
    char = document.getElementById('typing').value;
    charLength = char.length-1;


    if(charLength >= 0){
        paraValue = sentence[charLength];
        userValue = char[charLength];
        // console.log(userValue,paraValue)
        if(paraValue == userValue){
            result = userValue.fontcolor('blue');
            document.getElementById('result').innerHTML += result;
        }
        else{
            errorCount += 1;
            paraValue = sentence[charLength];
            document.getElementById('result').innerHTML += "<span style='background-color:red'>"+paraValue+"</span>";
        }

        // else{
        //     result = userValue.display(none);
        //     document.getElementById('result').innerHTML += result;
        // }
    }
    // console.log(char);




    // console.log(wordString);
    // wordString = wordString.split(' ');
    // wordString = wordString.length;
    // console.log('The Length of the String : '+wordString)
    //console.log(" The value of Para : "+sentence[charLength-1]);
}

function start(){
    charLength += 1;
    if(charLength == 1 && ref == 0){
        ref = setInterval(timer,1000)
    }
}

function timer(){
    leftTime -= 1;
    document.getElementById('timer').innerHTML = leftTime;
    document.getElementById('timerPara').classList.add('hide');
    if(leftTime == 0){
        clearInterval(ref)
        document.getElementById('lTime').classList.add('hide');
        document.getElementById('back').classList.remove('hide');
        document.getElementById('errors').innerHTML = errorCount;
        document.getElementById('tChars').innerHTML = charLength;
        document.getElementById('typing').classList.add('hide');
        char1 = char.split(' ');
        // console.log(char1Length);
            for(var i=0; i<char1.length; i++ ){
                // console.log('for condition executing')
                // console.log(char1[i],sentence1[i]);
                if(char1[i] == sentence1[i]){
                    // console.log('if condition executing')
                    word += 1;
                    document.getElementById('wpm').innerHTML = word;
                    console.log(word)
                }            }
 
    }
}

function reset(){
    leftTime = 60;
    ref = 0;
    errorCount = 0;
    charLength = 0;
    char = '';
    word = 0;
    
    document.getElementById('timerPara').classList.remove('hide');
    document.getElementById('lTime').classList.remove('hide');
    document.getElementById('back').classList.add('hide');
    document.getElementById('typing').classList.remove('hide');
    document.getElementById('timer').innerHTML = 60;
    document.getElementById('result').innerHTML = '';
    document.getElementById('typing').value = '';

}

// function checker(){

//     var string2 = document.getElementById('para').value;
//     console.log(string2)

// }

