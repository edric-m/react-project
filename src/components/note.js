import React from 'react';

const scales = {
    "ionian" : ["P1","M2","M3","P4","P5","M6","M7"],
    "dorian" : ["P1","M2","m3","P4","P5","M6","m7"],
    "phrygian" : ["P1","m2","m3","P4","P5","m6","m7"],
    "lydian" : ["P1","M2","M3","d5","P5","M6","M7"],
    "mixolydian" : ["P1","M2","M3","P4","P5","M6","m7"],
    "aeolian" : ["P1","M2","m3","P4","P5","m6","m7"],
    "locrian" : ["P1" ,"m2","m3","P4","d5","m6", "m7"]
};

let chords = [];

class Note extends React.Component {
    noteClicked() {
        if ( !chords.includes(this.props.note)) {
            chords.push(this.props.note)
            this.props.chooseNote(chords);
        } else {
            //remove note
            let i = 0;
            for (i = 0; i < chords.length; i ++ ) {
                if (chords[i] === this.props.note) {
                    chords.splice(i,1);
                }
            }
            this.props.chooseNote(chords);
        }
    }
    render() {
        let i = 0;
        let selectedClassCSS = "not-selected";
        if(chords.includes(this.props.note)) {
            selectedClassCSS = "selected-note";
        } else {
            selectedClassCSS = "not-selected-note";
        }
        if (this.props.degree[1] === "1") {
            return <p className={selectedClassCSS + " note-root"} onClick={(e) => this.noteClicked()}>{this.props.note}</p>
        } else {
            for ( i = 0; i < 7; i++) {
                if (scales[this.props.scale][i] === this.props.degree) {
                    return <p className={selectedClassCSS + " note-scale"} onClick={(e) => this.noteClicked()}>{this.props.note}</p>
                }
            }

            return <p className={selectedClassCSS + " note"} onClick={(e) => this.noteClicked()}>{this.props.note}</p>
        }
    }
}

export default Note;