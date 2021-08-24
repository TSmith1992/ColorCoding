const comboColors = ["white","red","orange","yellow","green","blue","indigo","violet","black"];
const defaultNumOfColors = 3;
const defaultGameTime = 60000;

//create a function that takes in a colorChoices object and the current gameLog and returns a new gameLog with the current choices in a log form

function makeLogEntryObject(colorChoices,currentGameLog,gameObject) {
    let thisEntry = {
        id: currentGameLog.length+1,
        combo: [],
        result: 0,
        win: false
    };
    for (let i=1;i<=colorChoices.length;i++) {
        let thisChoice = colorChoices.find(choice=>choice.id===i);
        thisEntry.combo = [...thisEntry.combo,thisChoice.color];
    };
    thisEntry.result = getAttemptResult(thisEntry.combo,gameObject);
    thisEntry.win = thisEntry.result===gameObject.winningCombo.length ? true : false;
    return [...currentGameLog,thisEntry];
}

//create a function called getAttemptResult that takes in the combo the player puts in and the gameObject and returns the number of entries that are correct (in the right place and the right color);

function getAttemptResult(combo,gameObject) {
    let outcome = 0;
    combo.forEach((entry,index)=>{if(entry===gameObject.winningCombo[index]){outcome++;}});
    return outcome;
}

//create a function called generateWinCombo that takes in a number and returns an array with that number of random colors

function generateWinCombo(numOfColors=defaultNumOfColors) {
    let winCombo = [];
    for (let i=0;i<numOfColors;i++) {
        let randomColor = comboColors[Math.round(Math.random()*8)];
        winCombo[i] = randomColor;
    }
    return winCombo;
}

// {winningCombo: [],timeToWin: defaultGameTime,};
        //create a function that called newGameObject that takes in a number of colors to use and timeToWin returns a game object with the winning combo, timeToWin, and the date 

function newGameObject(numOfColors=defaultNumOfColors,millisecondsToWin=defaultGameTime) {
    let now = new Date();
    let newWinCombo = generateWinCombo(numOfColors);
    return {
        winningCombo: newWinCombo,
        timeToWin: millisecondsToWin,
        startTime: now
    }
}

//create a function called getGameResult that takes in the gameData and log, it returns new 

export {comboColors, makeLogEntryObject, newGameObject};