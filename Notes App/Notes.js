//const { require } = require("yargs")
const chalk = require('chalk')
const fs = require('fs');

const sucess = chalk.green.inverse;
const error = chalk.red.inverse;

const getNotes = ()=>{
    return "Your Notes....";
}

const addNote = (tle,bdy)=>{
    const note = loadNotes();    
    const duplicateNote = note.find( (note) => note.title === tle );

    if(!duplicateNote){
        note.push({
            title: tle,
            body: bdy
        })    
        saveNotes(note);
        console.log(sucess('New Note added!'));
    }else{
        console.log(error('Note Title Taken!!'));
    }
    
}

const removeTitle = (tle)=>{
    const note = loadNotes();    
    const newNote = note.filter((note)=> note.title != tle );

    debugger

    if(note.length == newNote.length){
        console.log(error('No note found!'))
    }else{
        console.log(sucess('Note removed!'));
        saveNotes(newNote);
    }    
}

const listNote = ()=> {
    console.log(chalk.bold.blue('Your notes:'))
    const note = loadNotes();
    //const ntitle = JSON.stringify(note)
    note.forEach((n) => console.log(n.title) )    
}

const readNote = (tle) => {
    const notes = loadNotes();
    const title = notes.find((n) => n.title === tle);
    if(title){
        console.log(chalk.inverse.cyan('Title: ',title.title));
        console.log('Body: ',title.body);
    }else{
        console.log(error('No title found!'))
    }
    
}

const saveNotes = (note)=>{
    const dataJSON = JSON.stringify(note);
    fs.writeFileSync("notes.json",dataJSON);
}

const loadNotes = ()=>{   
    try {
        const readNotes = fs.readFileSync('notes.json');
        const stringNotes = readNotes.toString();
        return JSON.parse(stringNotes);  
    } catch (e) {
        return [];
    } 
     
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeTitle: removeTitle,
    listNote: listNote,
    readNote: readNote
}