import React from 'react';
import Note from './note.js';

class String extends React.Component {
    chooseString(tuning, key) {
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
            if(notes[i].note === key) {
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
        }

        switch(tuning) {
            case 'E':
                return this.getVals(notes, ["E","F","F#","G","G#","A","A#","B","C","C#","D","D#"]);
            case 'F':
                return this.getVals(notes, ["F","F#","G","G#","A","A#","B","C","C#","D","D#","E"]);
            case "F#":
                return this.getVals(notes, ["F#","G","G#","A","A#","B","C","C#","D","D#","E","F"]);
            case 'C':
                return this.getVals(notes, ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]);
            case "C#":
                return this.getVals(notes, ["C#","D","D#","E","F","F#","G","G#","A","A#","B","C"]);
            case 'A':
                return this.getVals(notes, ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"]);
            case "A#":
                return this.getVals(notes, ["A#","B","C","C#","D","D#","E","F","F#","G","G#","A"]);
            case 'D':
                return this.getVals(notes, ["D","D#","E","F","F#","G","G#","A","A#","B","C","C#"]);
            case "D#":
                return this.getVals(notes, ["D#","E","F","F#","G","G#","A","A#","B","C","C#","D"]);
            case 'G':
                return this.getVals(notes, ["G","G#","A","A#","B","C","C#","D","D#","E","F","F#"]);
            case "G#":
                return this.getVals(notes, ["G#","A","A#","B","C","C#","D","D#","E","F","F#","G"]);
            case 'B':
                return this.getVals(notes, ["B","C","C#","D","D#","E","F","F#","G","G#","A","A#"]);
            default:
                return [{"note": "not set", "degree": "P1"}];
        }
    }

    getVals(notes, t_string) {
        let i = 0;
        let j = 0;
        let result = [];
        for(i = 0; i < 12; i++) {
            for(j=0;j<12;j++) {
                if (notes[j].note === t_string[i]) {
                    result.push({"note": t_string[i], "degree": notes[j].value});
                }
            }
        }
        return result;
    }

    render() {
        let x = this.chooseString(this.props.tuning, this.props.keyNote);
        return (
            x.map((item,key) => (
                <Note key={key} chooseNote={this.props.chooseNote} chordNotes={this.props.chordNotes} note={item.note} degree={item.degree} scale={this.props.scale}/>)
            )
        );
    }
}

export default String;