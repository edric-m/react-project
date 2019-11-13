import React from 'react';
import Fretboard from '../components/fretboard.js';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenNote: "C",
            scaleType: "M",
            tuning: "EADGBE"
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

    render() {
        return (
            <> 
            <Fretboard keyNote={this.state.chosenNote} scale={this.state.scaleType} tuning={this.state.tuning} />

            <p>Choose key:</p>
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
                <li onClick={(e) => this.chooseScale("M")}>major</li>
                <li onClick={(e) => this.chooseScale("m")}>minor</li>
                <li onClick={(e) => (e)}>sharps #</li>
                <li onClick={(e) => (e)}>flats b</li>
            </ul>
            <p>Guitar tuning:</p>
            <ul className="choose-key">
                <li onClick={(e) => this.chooseTuning("EADGBE")}>EADGBE</li>
                <li onClick={(e) => this.chooseTuning("DADGBE")}>DADGBE</li>
                <li onClick={(e) => this.chooseTuning("DADGBD")}>DADGBD</li>
                <li onClick={(e) => this.chooseTuning("DADGAD")}>DADGAD</li>
                <li onClick={(e) => this.chooseTuning("DGDGBD")}>DGDGBD</li>
                <li onClick={(e) => this.chooseTuning("GGDGBD")}>GGDGBD</li>
                <li onClick={(e) => this.chooseTuning("DADADD")}>DADADD</li>
            </ul>
            </>
        )
    }
}

export default HomePage;