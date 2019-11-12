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
                //return 'E,F,F#,G,G#,A,A#,B,C,C#,D,D#,E';
                return this.getVal(notes, "E") + ' ' + 
                this.getVal(notes, "F") + ' ' +
                this.getVal(notes, "F#") + ' ' +
                this.getVal(notes, "G") + ' ' +
                this.getVal(notes, "G#") + ' ' +
                this.getVal(notes, "A") + ' ' +
                this.getVal(notes, "A#") + ' ' +
                this.getVal(notes, "B") + ' ' +
                this.getVal(notes, "C") + ' ' +
                this.getVal(notes, "C#") + ' ' +
                this.getVal(notes, "D") + ' ' +
                this.getVal(notes, "D#");
            case 'A':
                //return 'A,A#,B,C,C#,D,D#,E,F,F#,G,G#,A';
                return this.getVal(notes, "A") + ' ' + 
                this.getVal(notes, "A#") + ' ' +
                this.getVal(notes, "B") + ' ' +
                this.getVal(notes, "C") + ' ' +
                this.getVal(notes, "C#") + ' ' +
                this.getVal(notes, "D") + ' ' +
                this.getVal(notes, "D#") + ' ' +
                this.getVal(notes, "E") + ' ' +
                this.getVal(notes, "F") + ' ' +
                this.getVal(notes, "F#") + ' ' +
                this.getVal(notes, "G") + ' ' +
                this.getVal(notes, "G#");
            case 'D':
                //return 'D,D#,E,F,F#,G,G#,A,A#,B,C,C#,D';
                return this.getVal(notes, "D") + ' ' + 
                this.getVal(notes, "D#") + ' ' +
                this.getVal(notes, "E") + ' ' +
                this.getVal(notes, "F") + ' ' +
                this.getVal(notes, "F#") + ' ' +
                this.getVal(notes, "G") + ' ' +
                this.getVal(notes, "G#") + ' ' +
                this.getVal(notes, "A") + ' ' +
                this.getVal(notes, "A#") + ' ' +
                this.getVal(notes, "B") + ' ' +
                this.getVal(notes, "C") + ' ' +
                this.getVal(notes, "C#");
            case 'G':
                //return 'G,G#,A,A#,B,C,C#,D,D#,E,F,F#,G';
                return this.getVal(notes, "G") + ' ' + 
                this.getVal(notes, "G#") + ' ' +
                this.getVal(notes, "A") + ' ' +
                this.getVal(notes, "A#") + ' ' +
                this.getVal(notes, "B") + ' ' +
                this.getVal(notes, "C") + ' ' +
                this.getVal(notes, "C#") + ' ' +
                this.getVal(notes, "D") + ' ' +
                this.getVal(notes, "D#") + ' ' +
                this.getVal(notes, "E") + ' ' +
                this.getVal(notes, "F") + ' ' +
                this.getVal(notes, "F#");
            case 'B':
                //return 'B,C,C#,D,D#,E,F,F#,G,G#,A,A#,B';
                return this.getVal(notes, "B") + ' ' + 
                this.getVal(notes, "C") + ' ' +
                this.getVal(notes, "C#") + ' ' +
                this.getVal(notes, "D") + ' ' +
                this.getVal(notes, "D#") + ' ' +
                this.getVal(notes, "E") + ' ' +
                this.getVal(notes, "F") + ' ' +
                this.getVal(notes, "F#") + ' ' +
                this.getVal(notes, "G") + ' ' +
                this.getVal(notes, "G#") + ' ' +
                this.getVal(notes, "A") + ' ' +
                this.getVal(notes, "A#");
            default:
                return 'n/a';
        }
    }

    getVal(notes, note) {
        let i = 0;
        let result = 0;
        for(i = 0; i < 12; i++) {
            if (notes[i].note === note) {
                result = notes[i].value;
            }
        }
        return result.toString(10);
    }

    render() {
        let x = this.chooseString(this.props.tuning, this.props.keyNote).split(" ");
        return (
            x.map((item,key) => (
                <Note note={item} />)
            )
        );
    }
}

export default String;