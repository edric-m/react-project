import React from 'react';
import Fretboard from '../components/fretboard.js';
//import AudioIn from '../components/audioIn.js';
//import OptionsList from '../components/OptionsListStatic.js';
import OptionsList from '../components/OptionsListTransition.js';

//https://www.tutorialspoint.com/webrtc/webrtc_media_stream_apis.htm - audio stream capture
//https://en.wikipedia.org/wiki/Cooley%E2%80%93Tukey_FFT_algorithm - fft algorithm

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenNote: "C",
            scaleType: "ionian",
            tuning: ["E","A","D","G","B","E"],
            chord: []//,
            //chordType: "null"
        };
    }

    chooseKey = (note) => {
        this.setState({chosenNote: note});
    }

    chooseScale = (scale) => {
        this.setState({scaleType: scale});
    }

    chooseTuning = (tuning) => {
        this.setState({tuning: tuning});
    }

    tuneString = (stringNum, pitch) => { 
        let result = this.state.tuning;
        result[stringNum] = pitch.toUpperCase();
        this.chooseTuning(result);
    }

    chooseChord = (chordNotes) => {
        this.setState({chord: chordNotes});
        //this.setState({chordType: type}); needs type param
    }

    render() {
        return (
            <> 
            <div className="guitar">
                <div>
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
                    <Fretboard chooseNote={this.chooseChord} chordNotes={this.state.chord} keyNote={this.state.chosenNote} scale={this.state.scaleType} tuning={this.state.tuning} />
                </div>
            </div>

            <OptionsList center={this.chooseKey} scale={this.chooseScale} tune={this.chooseTuning} chord={this.chooseChord} />

            <div className="chordFinder">
                
                {
                //<div className="note-listener">
                //    <AudioIn chooseNote={this.chooseChord} />
                //</div>
                }
            </div>
           
            </>
        )
    }
}

export default HomePage;