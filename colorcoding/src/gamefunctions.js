const comboColors = ["white","red","orange","yellow","green","blue","indigo","violet","black"];

//create a function that takes in a colorChoices object and the current gameLog and returns a new gameLog with the current choices in a log form

function makeLogEntryObject(colorChoices,currentGameLog) {
    let thisEntry = {
        id: currentGameLog.length+1,
        combo: []
    };
    for (let i=1;i<=colorChoices.length;i++) {
        let thisChoice = colorChoices.find(choice=>choice.id===i);
        thisEntry.combo = [...thisEntry.combo,thisChoice.color];
    };
    return [...currentGameLog,thisEntry];
}

export {comboColors, makeLogEntryObject};