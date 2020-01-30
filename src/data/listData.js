const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "Gb", "G"];
const chordRoot = ["rA", "rA#", "rB", "rC", "rC#", "rD", "rD#", "rE", "rF", "rGb", "rG"];
const modes = ["lydian", "ionian(major)", "mixolydian", "dorian", "aeolian(minor)", "phrygian", "locrian"];
const tuningOps = ["standard", "drop d", "DADGBD", "DADGAD", "DGDGBD", "GGDGBD", "DADADD"];

//contains all possible items that can be added to the list and what functions they invoke when clicked
export default{
    //scale options
    "scales": {content: "scales", children: notes},
    //pitch center
    "A": {content: "A", children: modes, function: "chooseCenter=A"},
    "A#": {content: "A#", children: modes, function: "chooseCenter=A#"},
    "B": {content: "B", children: modes, function: "chooseCenter=B"},
    "C": {content: "C", children: modes, function: "chooseCenter=C"},
    "C#": {content: "C#", children: modes, function: "chooseCenter=C#"},
    "D": {content: "D", children: modes, function: "chooseCenter=D"},
    "D#": {content: "D#", children: modes, function: "chooseCenter=D#"},
    "E": {content: "E", children: modes, function: "chooseCenter=E"},
    "F": {content: "F", children: modes, function: "chooseCenter=F"},
    "F#": {content: "F#", children: modes, function: "chooseCenter=F#"},
    "G": {content: "G", children: modes, function: "chooseCenter=G"},
    "G#": {content: "G#", children: modes, function: "chooseCenter=G#"},
    //modes
    /*
    "lydian": {content: modes[0], children: [], function: "chooseMode="+mode[0]},
    "ionian": {content: modes[1] + " or major chord", children: [], function: "chooseMode="+mode[1]},
    "mixolydian": {content: modes[2], children: [], function: "chooseMode="+mode[2]},
    "dorian": {content: modes[3], children: [], function: "chooseMode="+mode[3]},
    "aeolian": {content: modes[4] + " or minor chord", children: [], function: "chooseMode="+mode[4]},
    "phrygian": {content: modes[5], children: [], function: "chooseMode="+mode[5]},
    "locrian": {content: modes[6], children: [], function: "chooseMode="+mode[6]},
    */

    //chords
    "chords": {content: "chords", children: chordRoot, function: []},
    //chord roots
    "rA": {content: "A", children: [], function: "chooseChord=A"},
    "rA#": {content: "A#", children: [], function: "chooseChord=A#"},
    "rB": {content: "B", children: [], function: "chooseChord=B"},
    "rC": {content: "C", children: [], function: "chooseChord=C"},
    "rC#": {content: "C#", children: [], function: "chooseChord=C#"},
    "rD": {content: "D", children: [], function: "chooseChord=D"},
    "rD#": {content: "D#", children: [], function: "chooseChord=D#"},
    "rE": {content: "E", children: [], function: "chooseChord=E"},
    "rF": {content: "F", children: [], function: "chooseChord=F"},
    "rF#": {content: "F#", children: [], function: "chooseChord=F#"},
    "rG": {content: "G", children: [], function: "chooseChord=G"},
    "rG#": {content: "G#", children: [], function: "chooseChord=G#"},

    //chord types
    "smaj": {content: "maj", children: chordRoot, function: []},
    "smin": {content: "min", children: chordRoot, function: []},
    "smaj7": {content: "maj7", children: chordRoot, function: []},
    "smin7": {content: "min7", children: chordRoot, function: []},
    "s7": {content: "7", children: chordRoot, function: []},
    "sdim": {content: "dim", children: chordRoot, function: []},
    "saug": {content: "aug", children: chordRoot, function: []},
    "ssus2": {content: "sus2", children: chordRoot, function: []},
    "ssus4": {content: "sus4", children: chordRoot, function: []},
    //note types
    "sA": {content: "A", children: [], function: []},
    "sA#": {content: "A#", children: [], function: []},
    "sB": {content: "B", children: [], function: []},
    "sC": {content: "C", children: [], function: []},
    "sC#": {content: "C#", children: [], function: []},
    "sD": {content: "D", children: [], function: []},
    "sD#": {content: "D#", children: [], function: []},
    "sE": {content: "E", children: [], function: []},
    "sF": {content: "F", children: [], function: []},
    "sF#": {content: "F#", children: [], function: []},
    "sG": {content: "G", children: [], function: []},
    "sG#": {content: "G#", children: [], function: []},
    //related key types (combine with note types)
    "maj": {content: "maj", children: [], function: []},

    //tuning
    "tuning": {content: "tuning", children: tuningOps, function: []},
    //tuning types
    "standard": {content: "standard tuning", children: [], function: "chooseTuning=EADGBE"},
    "drop d": {content: "drop d", children: [], function: "chooseTuning=DADGBE"},
    "DADGBD": {content: "DADGBD", children: [], function: "chooseTuning=DADGBD"},
    "DADGAD": {content: "DADGAD", children: [], function: "chooseTuning=DADGAD"},
    "DGDGBD": {content: "DGDGBD", children: [], function: "chooseTuning=DGDGBD"},
    "GGDGBD": {content: "GGDGBD", children: [], function: "chooseTuning=GGDGBD"},
    "DADADD": {content: "DADADD", children: [], function: "chooseTuning=DADADD"}
    //info for each tuning
    //...

    //placeholder
    //"temp": {content: "placeholder", children: []}
}