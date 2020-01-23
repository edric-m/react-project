const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "Gb", "G"];
const chordRoot = ["rA", "rA#", "rB", "rC", "rC#", "rD", "rD#", "rE", "rF", "rGb", "rG"];
const modes = ["lydian", "ionian(major)", "mixolydian", "dorian", "aeolian(minor)", "phrygian", "locrian"];

//contains all possible items that can be added to the list and what functions they invoke when clicked
export default[
    //scale options
    {name: "scales", content: "scales", children: notes},
    //pitch center
    {name: "A", content: "A", children: modes, function: "chooseCenter=A"},
    {name: "A#", content: "A#", children: modes, function: "chooseCenter=A#"},
    {name: "B", content: "B", children: modes, function: "chooseCenter=B"},
    {name: "C", content: "C", children: modes, function: "chooseCenter=C"},
    {name: "C#", content: "C#", children: modes, function: "chooseCenter=C#"},
    {name: "D", content: "D", children: modes, function: "chooseCenter=D"},
    {name: "D#", content: "D#", children: modes, function: "chooseCenter=D#"},
    {name: "E", content: "E", children: modes, function: "chooseCenter=E"},
    {name: "F", content: "F", children: modes, function: "chooseCenter=F"},
    {name: "F#", content: "F#", children: modes, function: "chooseCenter=F#"},
    {name: "G", content: "G", children: modes, function: "chooseCenter=G"},
    {name: "G#", content: "G#", children: modes, function: "chooseCenter=G#"},
    //modes
    {name: modes[0], content: modes[0], children: [], function: "chooseMode="+mode[0]},
    {name: modes[1], content: modes[1] + " or major chord", children: [], function: "chooseMode="+mode[1]},
    {name: modes[2], content: modes[2], children: [], function: "chooseMode="+mode[2]},
    {name: modes[3], content: modes[3], children: [], function: "chooseMode="+mode[3]},
    {name: modes[4], content: modes[4] + " or minor chord", children: [], function: "chooseMode="+mode[4]},
    {name: modes[5], content: modes[5], children: [], function: "chooseMode="+mode[5]},
    {name: modes[6], content: modes[6], children: [], function: "chooseMode="+mode[6]},

    //chords
    {name: "chords", content: "chords", children: chordRoot, function: []},
    //chord roots
    {name: "rA", content: "A", children: [], function: "chooseChord=A"},
    {name: "rA#", content: "A#", children: [], function: "chooseChord=A#"},
    {name: "rB", content: "B", children: [], function: "chooseChord=B"},
    {name: "rC", content: "C", children: [], function: "chooseChord=C"},
    {name: "rC#", content: "C#", children: [], function: "chooseChord=C#"},
    {name: "rD", content: "D", children: [], function: "chooseChord=D"},
    {name: "rD#", content: "D#", children: [], function: "chooseChord=D#"},
    {name: "rE", content: "E", children: [], function: "chooseChord=E"},
    {name: "rF", content: "F", children: [], function: "chooseChord=F"},
    {name: "rF#", content: "F#", children: [], function: "chooseChord=F#"},
    {name: "rG", content: "G", children: [], function: "chooseChord=G"},
    {name: "rG#", content: "G#", children: [], function: "chooseChord=G#"},

    //chord types
    {name: "smaj", content: "maj", children: chordRoot, function: []},
    {name: "smin", content: "min", children: chordRoot, function: []},
    {name: "smaj7", content: "maj7", children: chordRoot, function: []},
    {name: "smin7", content: "min7", children: chordRoot, function: []},
    {name: "s7", content: "7", children: chordRoot, function: []},
    {name: "sdim", content: "dim", children: chordRoot, function: []},
    {name: "saug", content: "aug", children: chordRoot, function: []},
    {name: "ssus2", content: "sus2", children: chordRoot, function: []},
    {name: "ssus4", content: "sus4", children: chordRoot, function: []},
    //note types
    {name: "sA", content: "A", children: [], function: []},
    {name: "sA#", content: "A#", children: [], function: []},
    {name: "sB", content: "B", children: [], function: []},
    {name: "sC", content: "C", children: [], function: []},
    {name: "sC#", content: "C#", children: [], function: []},
    {name: "sD", content: "D", children: [], function: []},
    {name: "sD#", content: "D#", children: [], function: []},
    {name: "sE", content: "E", children: [], function: []},
    {name: "sF", content: "F", children: [], function: []},
    {name: "sF#", content: "F#", children: [], function: []},
    {name: "sG", content: "G", children: [], function: []},
    {name: "sG#", content: "G#", children: [], function: []},
    //related key types (combine with note types)
    {name: "maj", content: "maj", children: [], function: []},

    //tuning
    {name: "standard", content: "standard tuning", children: [], function: "chooseTuning=EADGBE"},
    {name: "drop d", content: "drop d", children: [], function: "chooseTuning=DADGBE"},
    {name: "DADGBD", content: "DADGBD", children: [], function: "chooseTuning=DADGBD"},
    {name: "DADGAD", content: "DADGAD", children: [], function: "chooseTuning=DADGAD"},
    {name: "DGDGBD", content: "DGDGBD", children: [], function: "chooseTuning=DGDGBD"},
    {name: "GGDGBD", content: "GGDGBD", children: [], function: "chooseTuning=GGDGBD"},
    {name: "DADADD", content: "DADADD", children: [], function: "chooseTuning=DADADD"}
    //info for each tuning
    //...
    
    //placeholder
    //{name: "temp", content: "placeholder", children: []}
]