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
        


        /*
        if (this.props.scale === "m") {
            if (this.props.degree[1] === "1") {
                return <p className="note-root">{this.props.note}</p>
            } else if (this.props.degree === "M2" || this.props.degree[0] === "P" || this.props.degree === "m3" || this.props.degree === "m6" || this.props.degree === "m7") {
                return <p className="note-scale">{this.props.note}</p>
            } else {
                return <p className="note">{this.props.note}</p>
            }
        } else {
            if (this.props.degree[1] === "1") {
                return <p className="note-root">{this.props.note}</p>
            } else if (this.props.degree[0] === "M" || this.props.degree[0] === "P") {
                return <p className="note-scale">{this.props.note}</p>
            } else {
                return <p className="note">{this.props.note}</p>
            }
        }
        */
        
    }
}

export default Note;