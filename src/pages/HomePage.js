import React from 'react';
import Fretboard from '../components/fretboard.js';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {chosenNote: "C"};
    }

    chooseKey(note) {
        this.setState({chosenNote: note});
    }

    render() {
        return (
            <> 
            <h1>Fretboard</h1>
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
            </ul>
            
            <Fretboard keyNote={this.state.chosenNote} />

            <h1>Tuning:</h1>
            </>
        )
    }
}

export default HomePage;