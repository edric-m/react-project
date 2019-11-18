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

class Note extends React.Component {
    render() {
        let i = 0;
        if (this.props.degree[1] === "1") {
            return <p className="note-root">{this.props.note}</p>
        } else {
            for ( i = 0; i < 7; i++) {
                if (scales[this.props.scale][i] === this.props.degree) {
                    return <p className="note-scale">{this.props.note}</p>
                }
            }

            return <p className="note">{this.props.note}</p>
        }
    }
}

export default Note;