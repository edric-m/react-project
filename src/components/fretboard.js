import React from 'react';
import String from './string.js';

class Fretboard extends React.Component {
    render() {
        return (
            <>
            <h2>Fretboard</h2>
            <div>
                <String tuning={this.props.tuning[5]} keyNote={this.props.keyNote} scale={this.props.scale} />
            </div>
            <div>
                <String tuning={this.props.tuning[4]} keyNote={this.props.keyNote} scale={this.props.scale} />
            </div>
            <div>
                <String tuning={this.props.tuning[3]} keyNote={this.props.keyNote} scale={this.props.scale} />
            </div>
            <div>
                <String tuning={this.props.tuning[2]} keyNote={this.props.keyNote} scale={this.props.scale} />
            </div>
            <div>
                <String tuning={this.props.tuning[1]} keyNote={this.props.keyNote} scale={this.props.scale} />
            </div>
            <div>
                <String tuning={this.props.tuning[0]} keyNote={this.props.keyNote} scale={this.props.scale} />
            </div>
            <h2>Key: {this.props.keyNote}{this.props.scale}</h2>
            <String tuning="A" keyNote={this.props.keyNote} scale={this.props.scale} />
            </>
        );
    }
}

export default Fretboard;