import React from 'react';
import Fretboard from '../components/fretboard.js';
import Chord from '../components/chord.js';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenNote: "C",
            scaleType: "ionian",
            tuning: ["E","A","D","G","B","E"],
            chord: []
        };
    }

    chooseKey(note) {
        this.setState({chosenNote: note});
    }

    chooseScale(scale) {
        this.setState({scaleType: scale});
    }

    chooseTuning(tuning) {
        this.setState({tuning: tuning});
    }

    tuneString(stringNum, pitch) {
        let result = this.state.tuning;
        result[stringNum] = pitch.toUpperCase();
        this.chooseTuning(result);
    }

    chooseChord = (chordNote) => {
        if (chordNote === "clear") {
            this.setState({chord: []});
            return;
        }

        if ( !this.state.chord.includes(chordNote) ) {
            let temp = this.state.chord;
            temp.push(chordNote);
            this.setState({chord: temp});
        }
    }

    render() {
        return (
            <> 
            <div className="guitar">
                <div>
                    <h2>Tunning   :</h2>
                    <form className="tunner">
                        <input type="text" onChange={(e) => this.tuneString(5, e.target.value)}/>
                        <input type="text" onChange={(e) => this.tuneString(4, e.target.value)}/>
                        <input type="text" onChange={(e) => this.tuneString(3, e.target.value)}/>
                        <input type="text" onChange={(e) => this.tuneString(2, e.target.value)}/>
                        <input type="text" onChange={(e) => this.tuneString(1, e.target.value)}/>
                        <input type="text" onChange={(e) => this.tuneString(0, e.target.value)}/>
                    </form>
                </div>

                <div>
                    <Fretboard keyNote={this.state.chosenNote} scale={this.state.scaleType} tuning={this.state.tuning} />
                </div>
            </div>

            <p>Choose pitch:</p>
            <ul className="choose-key">
                <li onClick={(e) => this.chooseKey("C")}>C</li>
                <li onClick={(e) => this.chooseKey("C#")}>C#</li>
                <li onClick={(e) => this.chooseKey("D")}>D</li>
                <li onClick={(e) => this.chooseKey("D#")}>D#</li>
                <li onClick={(e) => this.chooseKey("E")}>E</li>
                <li onClick={(e) => this.chooseKey("F")}>F</li>
                <li onClick={(e) => this.chooseKey("F#")}>F#</li>
                <li onClick={(e) => this.chooseKey("G")}>G</li>
                <li onClick={(e) => this.chooseKey("G#")}>G#</li>
                <li onClick={(e) => this.chooseKey("A")}>A</li>
                <li onClick={(e) => this.chooseKey("A#")}>A#</li>
                <li onClick={(e) => this.chooseKey("B")}>B</li>
                
                <li onClick={(e) => (e)}>sharps #</li>
                <li onClick={(e) => (e)}>flats b</li>
            </ul>

            <p>Choose mode (ordered from brighter to darker sound): </p>
            <ul className="choose-key">
                <li onClick={(e) => this.chooseScale("lydian")}>lydian</li>
                <li onClick={(e) => this.chooseScale("ionian")}>ionain(major)</li>
                <li onClick={(e) => this.chooseScale("mixolydian")}>mixolydian</li>
                <li onClick={(e) => this.chooseScale("dorian")}>dorian</li>
                <li onClick={(e) => this.chooseScale("aeolian")}>aeolian(minor)</li>
                <li onClick={(e) => this.chooseScale("phrygian")}>prygian</li>
                <li onClick={(e) => this.chooseScale("locrian")}>locrian</li>
            </ul>

            <p>Choose chord:</p>
            <ul className="choose-key">
                <li onClick={(e) => this.chooseChord("C")}>C</li>
                <li onClick={(e) => this.chooseChord("C#")}>C#</li>
                <li onClick={(e) => this.chooseChord("D")}>D</li>
                <li onClick={(e) => this.chooseChord("D#")}>D#</li>
                <li onClick={(e) => this.chooseChord("E")}>E</li>
                <li onClick={(e) => this.chooseChord("F")}>F</li>
                <li onClick={(e) => this.chooseChord("F#")}>F#</li>
                <li onClick={(e) => this.chooseChord("G")}>G</li>
                <li onClick={(e) => this.chooseChord("G#")}>G#</li>
                <li onClick={(e) => this.chooseChord("A")}>A</li>
                <li onClick={(e) => this.chooseChord("A#")}>A#</li>
                <li onClick={(e) => this.chooseChord("B")}>B</li>
                <li onClick={(e) => this.chooseChord("clear")}>clear</li>
            </ul>
            <Chord notes={this.state.chord} />
            
            <p>Common tunings:</p>
            <ul className="choose-key">
                <li onClick={(e) => this.chooseTuning(["E","A","D","G","B","E"])}>EADGBE</li>
                <li onClick={(e) => this.chooseTuning(["D","A","D","G","B","E"])}>DADGBE</li>
                <li onClick={(e) => this.chooseTuning(["D","A","D","G","B","D"])}>DADGBD</li>
                <li onClick={(e) => this.chooseTuning(["D","A","D","G","A","D"])}>DADGAD</li>
                <li onClick={(e) => this.chooseTuning(["D","G","D","G","B","D"])}>DGDGBD</li>
                <li onClick={(e) => this.chooseTuning(["G","G","D","G","B","D"])}>GGDGBD</li>
                <li onClick={(e) => this.chooseTuning(["D","A","D","A","D","D"])}>DADADD</li>
            </ul>
            </>
        )
    }
}

export default HomePage;