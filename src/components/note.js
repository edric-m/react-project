import React from 'react';

class Note extends React.Component {
    render() {
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
        
    }
}

export default Note;