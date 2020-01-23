import React from 'react';
import ListItem from '../components/listItem.js';

class OptionsListStatic extends React.Component {
    //import choose chord, key, tuning functions as properties
    
    render() {
        const {center, scale, tune} = this.props;

        return (
            <>
            <div className="appFunctions">
                
                <p>Choose pitch:</p>
                <ul className="choose-key">
                    <li onClick={(e) => center("C")}>C</li>
                    <li onClick={(e) => center("C#")}>C#</li>
                    <li onClick={(e) => center("D")}>D</li>
                    <li onClick={(e) => center("D#")}>D#</li>
                    <li onClick={(e) => center("E")}>E</li>
                    <li onClick={(e) => center("F")}>F</li>
                    <li onClick={(e) => center("F#")}>F#</li>
                    <li onClick={(e) => center("G")}>G</li>
                    <li onClick={(e) => center("G#")}>G#</li>
                    <li onClick={(e) => center("A")}>A</li>
                    <li onClick={(e) => center("A#")}>A#</li>
                    <li onClick={(e) => center("B")}>B</li>
                </ul>

                <p>Choose mode (ordered from brighter to darker sound): </p>
                <ul className="choose-key">
                    <li onClick={(e) => scale("lydian")}>lydian</li>
                    <li onClick={(e) => scale("ionian")}>ionain(major)</li>
                    <li onClick={(e) => scale("mixolydian")}>mixolydian</li>
                    <li onClick={(e) => scale("dorian")}>dorian</li>
                    <li onClick={(e) => scale("aeolian")}>aeolian(minor)</li>
                    <li onClick={(e) => scale("phrygian")}>prygian</li>
                    <li onClick={(e) => scale("locrian")}>locrian</li>
                </ul>
                
                <p>Common tunings:</p>
                <ul className="choose-key">
                    <li onClick={(e) => tune(["E","A","D","G","B","E"])}>EADGBE</li>
                    <li onClick={(e) => tune(["D","A","D","G","B","E"])}>DADGBE</li>
                    <li onClick={(e) => tune(["D","A","D","G","B","D"])}>DADGBD</li>
                    <li onClick={(e) => tune(["D","A","D","G","A","D"])}>DADGAD</li>
                    <li onClick={(e) => tune(["D","G","D","G","B","D"])}>DGDGBD</li>
                    <li onClick={(e) => tune(["G","G","D","G","B","D"])}>GGDGBD</li>
                    <li onClick={(e) => tune(["D","A","D","A","D","D"])}>DADADD</li>
                </ul>

            </div>
            </>
        )
    }
}

export default OptionsListStatic;
