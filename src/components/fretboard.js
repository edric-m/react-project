import React from 'react';
import String from './string.js';
import FretNumber from './fretNumber.js';
import Chord from '../components/chord.js';

const scale = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
const mode = {"lydian":7,"ionian":0,"mixolydian":5,"dorian":10,"aeolian":3,"phrygian":8,"locrian":1};

class Fretboard extends React.Component {
    findModeKeyIndex(length, begin, increment) {
        if ( ( begin + increment) > length ) {
            return begin - length + increment;
        }
        return begin + increment;
    }
    render() {
        let i = 0;
        let pair;
        for (i=0; i<12; i++) {
            if (scale[i] === this.props.keyNote) {
                pair = scale[this.findModeKeyIndex(12,i,mode[this.props.scale])];
            }
        }
        return ( //strings can be put in a loop
            <>
            <div className="fretboard"> 
                <div>
                    <String chooseNote={this.props.chooseNote} chordNotes={this.props.chordNotes} tuning={this.props.tuning[5]} keyNote={this.props.keyNote} scale={this.props.scale} />
                </div>
                <div>
                    <String chooseNote={this.props.chooseNote} chordNotes={this.props.chordNotes} tuning={this.props.tuning[4]} keyNote={this.props.keyNote} scale={this.props.scale} />
                </div>
                <div>
                    <String chooseNote={this.props.chooseNote} chordNotes={this.props.chordNotes} tuning={this.props.tuning[3]} keyNote={this.props.keyNote} scale={this.props.scale} />
                </div>
                <div>
                    <String chooseNote={this.props.chooseNote} chordNotes={this.props.chordNotes} tuning={this.props.tuning[2]} keyNote={this.props.keyNote} scale={this.props.scale} />
                </div>
                <div>
                    <String chooseNote={this.props.chooseNote} chordNotes={this.props.chordNotes} tuning={this.props.tuning[1]} keyNote={this.props.keyNote} scale={this.props.scale} />
                </div>
                <div>
                    <String chooseNote={this.props.chooseNote} chordNotes={this.props.chordNotes} tuning={this.props.tuning[0]} keyNote={this.props.keyNote} scale={this.props.scale} />
                </div>
            </div>
            
            <div>
                <FretNumber />
            </div>
            <p><b>Mode:</b> {this.props.keyNote} {this.props.scale} | <b>Key:</b> {pair} major | <b><font color={this.props.chordNotes.length === 0 ? "black" : "blue"}>Chord:</font></b> <Chord notes={this.props.chordNotes} /> ({this.props.chordNotes.toString()})</p>
            <div className="fretboard">
                <String chooseNote={this.props.chooseNote} chordNotes={this.props.chordNotes} tuning={this.props.keyNote} keyNote={this.props.keyNote} scale={this.props.scale} />
            </div>
            </>
        );
    }
}

export default Fretboard;