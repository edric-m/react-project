import React from 'react';

//props: chord[], bassNote?

//data: keys{}
/*
const keys = [
    {"name" : "C" , "notes": ["C","D","E","F","G","A","B"]},
    {"name" : "C#", "notes" : ["C#","D#","E","F#","G#","A#","C"]},
    {"name" : "D" , "notes": ["D","E","F#","G","A","B","C#"]},
    {"name" : "D#", "notes" : ["D#","F","G","G#","A#","C","D"]},
    {"name" : "E" , "notes": ["E","F#","G#","A","B","C#","D#"]},
    {"name" : "F" , "notes": ["F","G","A","A#","C","D","E"]},
    {"name" : "F#", "notes" : ["F#","G#","A#","B","C#","D#","F"]},
    {"name" : "G" , "notes": ["G","A","B","C","D","E","F#"]},
    {"name" : "G#", "notes" : ["G#","A#","C","C#","D#","F","G"]},
    {"name" : "A" , "notes": ["A","B","C#","D","E","F#","G#"]},
    {"name" : "A#", "notes" : ["A#","C","D","D#","F","G","A",]},
    {"name" : "B" , "notes": ["B","C#","D#","E","F#","G#","A#"]}
];
*/

//const degrees = ["P1","m2","M2","m3","M3","P4","d5","P5","m6","M6","m7","M7"];

const orderNotes = (bassNote) => { //export to its own component, along with same code in string.js
    let notes = [
        {"note" : "C", "value" : 1},
        {"note" : "C#", "value" : 2},
        {"note" : "D", "value" : 3},
        {"note" : "D#", "value" : 4},
        {"note" : "E", "value" : 5},
        {"note" : "F", "value" : 6},
        {"note" : "F#", "value" : 7},
        {"note" : "G", "value" : 8},
        {"note" : "G#", "value" : 9},
        {"note" : "A", "value" : 10},
        {"note" : "A#", "value" : 11},
        {"note" : "B", "value" : 12},
    ];

    let i = 0;
    let startVal = 0;
    for(i = 0; i < 12; i++) {
        if(notes[i].note === bassNote) {
            startVal = i;
        }
    }
    let temp = 0;
    for(i = 0; i < 12; i ++) { 
        temp = notes[i].value - startVal;
        if (temp < 1) {
            notes[i].value = temp + 12;
        } else {
            notes[i].value = temp;
        }
    }

    /*
    for(i = 0; i < 12; i ++) {
        switch(notes[i].value) {
            case 1: notes[i].value = "P1"; break;
            case 2: notes[i].value = "m2"; break;
            case 3: notes[i].value = "M2"; break;
            case 4: notes[i].value = "m3"; break;
            case 5: notes[i].value = "M3"; break;
            case 6: notes[i].value = "P4"; break;
            case 7: notes[i].value = "d5"; break;
            case 8: notes[i].value = "P5"; break;
            case 9: notes[i].value = "m6"; break;
            case 10: notes[i].value = "M6"; break;
            case 11: notes[i].value = "m7"; break;
            case 12: notes[i].value = "M7"; break;
            default: break;
        }
    }*/
    return notes;
}

class ChordIdentifier extends React.Component {
    findChords(degrees, notes) {
        let chords = "none";

        console.log(degrees);
        console.log(notes);
        
        //check invalid
        if((notes.includes(degrees[3].note) && notes.includes(degrees[4].note)) || (notes.includes(degrees[6].note) && notes.includes(degrees[7].note))) {
            chords = "invalid";
            return chords;
        }
        //check major triad
        //M3, P5
        if(notes.includes(degrees[4].note) && notes.includes(degrees[7].note)) {
            chords = "maj";
        }
        //check minor triad
        //m3, p5
        if(notes.includes(degrees[3].note) && notes.includes(degrees[7].note)) {
            chords = "min";
        }
        if(notes.includes(degrees[3].note) && notes.includes(degrees[6].note)) {
            chords = "dim";
        }
        if(notes.includes(degrees[4].note) && notes.includes(degrees[8].note)) {
            chords = "aug";
        }
        if(notes.includes(degrees[2].note) && notes.includes(degrees[7].note)) {
            chords = "sus2";
        }
        if(notes.includes(degrees[5].note) && notes.includes(degrees[7].note)) {
            chords = "sus4";
        }
        //check 6

        //check 7 chord

        //check 9

        //check 11

        //check 13

        //combine


        return chords;
    }
    //return keys that fit the chord
    render() {
        let degrees = orderNotes("G");
        let chord = this.findChords(degrees, this.props.notes);
        return (
            <>
            <p>{chord}</p>
            </>
        );
    }
}

export default ChordIdentifier;