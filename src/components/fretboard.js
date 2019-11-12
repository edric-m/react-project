import React from 'react';
import String from './string.js';

class Fretboard extends React.Component {
    render() {
        return (
            <>
            <h2>Key: {this.props.keyNote}</h2>
            <div>
                <String tuning="E" keyNote={this.props.keyNote} />
            </div>
            <div>
                <String tuning="B" keyNote={this.props.keyNote} />
            </div>
            <div>
                <String tuning="G" keyNote={this.props.keyNote} />
            </div>
            <div>
                <String tuning="D" keyNote={this.props.keyNote} />
            </div>
            <div>
                <String tuning="A" keyNote={this.props.keyNote} />
            </div>
            <div>
                <String tuning="E" keyNote={this.props.keyNote} />
            </div>
            </>
        );
    }
}

export default Fretboard;