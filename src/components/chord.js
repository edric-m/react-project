import React from 'react';

//props: chord[], bassNote?

//data: keys{} 0 12 34 5 67 89 1011
/*
const chords = {
    "maj" : [5, 7],
    "min" : [4, 7],
    "dim" : [4, 6],
    "sus2"  : [3, 7],
    "sus4"  : [6, 7],
    "7" :  [5, 7, 11],
    "ma7j"  : [5, 7, 12],
    "min7"  : [4, 7, 11],
};*/

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
    let temp = [];
    for(i = 0; i < 12; i ++) { 
        temp.push(notes[startVal + i]);
        if (startVal + i === 11) {
            startVal = -1 - i;
        }
    }
    notes = temp;
    
    return notes;
}

class ChordIdentifier extends React.Component {
    findChords(degrees, notes) {
        let chords = "no chord found";
        let bassNote = notes[0];

        if(notes.length > 4) {
            return chords;
        }
        
        //check invalid
        if((notes.includes(degrees[3].note) && notes.includes(degrees[4].note)) || (notes.includes(degrees[6].note) && notes.includes(degrees[7].note))) {
            return chords;
        }
        //check major triad
        //M3, P5
        if(notes.includes(degrees[4].note) && notes.includes(degrees[7].note)) {
            chords = bassNote + "maj";
            if(notes.includes(degrees[11].note)) {
                chords = bassNote + "maj7";
            }
            if(notes.includes(degrees[10].note)) {
                chords = bassNote + "7";
            }
            return chords;
        }
        //check minor triad
        //m3, p5
        if(notes.includes(degrees[3].note) && notes.includes(degrees[7].note)) {
            if(notes.includes(degrees[10].note)) {
                chords = bassNote + "min7";
            } else {
                chords = bassNote + "min";
            }
            return chords;
        }
        if(notes.includes(degrees[3].note) && notes.includes(degrees[6].note)) {
            chords = bassNote + "dim";
        }
        if(notes.includes(degrees[4].note) && notes.includes(degrees[8].note)) {
            chords = bassNote + "aug";
        }
        if(notes.includes(degrees[2].note) && notes.includes(degrees[7].note)) {
            chords = bassNote + "sus2";
        }
        if(notes.includes(degrees[5].note) && notes.includes(degrees[7].note)) {
            chords = bassNote + "sus4";
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
        let degrees = orderNotes(this.props.notes[0]);
        let chord = this.findChords(degrees, this.props.notes);
        return (
            <>
            <p>{chord}</p>
            </>
        );
    }
}

export default ChordIdentifier;