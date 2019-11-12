import React from 'react';

class Note extends React.Component {
    render() {
        if (this.props.scale === "m") {
            if (this.props.note[1] === "1") {
                return <p className="note-root">{this.props.note}</p>
            } else if (this.props.note === "M2" || this.props.note[0] === "P" || this.props.note === "m3" || this.props.note === "m6" || this.props.note === "m7") {
                return <p className="note-scale">{this.props.note}</p>
            } else {
                return <p className="note">{this.props.note}</p>
            }
        } else {
            if (this.props.note[1] === "1") {
                return <p className="note-root">{this.props.note}</p>
            } else if (this.props.note[0] === "M" || this.props.note[0] === "P") {
                return <p className="note-scale">{this.props.note}</p>
            } else {
                return <p className="note">{this.props.note}</p>
            }
        }
        
    }
}

export default Note;