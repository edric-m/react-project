import React from 'react';

class Note extends React.Component {
    render() {
        if (this.props.note[1] === "1") {
            return <p className="note-root">{this.props.note}</p>
        } else if (this.props.note[0] === "M" || this.props.note[0] === "P") {
            return <p className="note-maj">{this.props.note}</p>
        } else {
            return <p className="note">{this.props.note}</p>
        }
    }
}

export default Note;