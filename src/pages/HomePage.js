import React from 'react';
import Fretboard from '../components/fretboard.js';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenNote: "C",
            scaleType: "M",
            tuning: ["E","A","D","G","B","E"]
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