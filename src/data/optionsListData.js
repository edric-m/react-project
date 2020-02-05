const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
const chordRoot = ["rA", "rA#", "rB", "rC", "rC#", "rD", "rD#", "rE", "rF", "rF#", "rG", "rG#"];
const modes = ["lydian", "ionian", "mixolydian", "dorian", "aeolian", "phrygian", "locrian"];
const tuningOps = ["standard", "NewST", "fifths", "drop d", "DADGAD","custom"];
const chordTypes = ["smaj","smin","smaj7","smin7","s7chrd","sdim","saug","ssus2","ssus4","snone","scus"];

//contains all possible items that can be added to the list and what functions they invoke when clicked
export default[
    //scale options
    {name: "scales", content: "key center", children: notes, function: []},
    //pitch center
    {name: "A", content: "A", children: modes, function: "K=A"},
    {name: "A#", content: "A#", children: modes, function: "K=A#"},
    {name: "B", content: "B", children: modes, function: "K=B"},
    {name: "C", content: "C", children: modes, function: "K=C"},
    {name: "C#", content: "C#", children: modes, function: "K=C#"},
    {name: "D", content: "D", children: modes, function: "K=D"},
    {name: "D#", content: "D#", children: modes, function: "K=D#"},
    {name: "E", content: "E", children: modes, function: "K=E"},
    {name: "F", content: "F", children: modes, function: "K=F"},
    {name: "F#", content: "F#", children: modes, function: "K=F#"},
    {name: "G", content: "G", children: modes, function: "K=G"},
    {name: "G#", content: "G#", children: modes, function: "K=G#"},
    //modes
    {name: "lydian", content: modes[0], children: [], function: "M="+modes[0]},
    {name: "ionian", content: modes[1] + " (major)", children: [], function: "M="+modes[1]},
    {name: "mixolydian", content: modes[2], children: [], function: "M="+modes[2]},
    {name: "dorian", content: modes[3], children: [], function: "M="+modes[3]},
    {name: "aeolian", content: modes[4] + " (minor)", children: [], function: "M="+modes[4]},
    {name: "phrygian", content: modes[5], children: [], function: "M="+modes[5]},
    {name: "locrian", content: modes[6], children: [], function: "M="+modes[6]},

    //chords
    {name: "chords", content: "chords", children: chordTypes, function: []},
    //chord roots
    {name: "rA", content: "A", children: [], function: "C=A"},
    {name: "rA#", content: "A#", children: [], function: "C=A#"},
    {name: "rB", content: "B", children: [], function: "C=B"},
    {name: "rC", content: "C", children: [], function: "C=C"},
    {name: "rC#", content: "C#", children: [], function: "C=C#"},
    {name: "rD", content: "D", children: [], function: "C=D"},
    {name: "rD#", content: "D#", children: [], function: "C=D#"},
    {name: "rE", content: "E", children: [], function: "C=E"},
    {name: "rF", content: "F", children: [], function: "C=F"},
    {name: "rF#", content: "F#", children: [], function: "C=F#"},
    {name: "rG", content: "G", children: [], function: "C=G"},
    {name: "rG#", content: "G#", children: [], function: "C=G#"},

    //chord types
    {name: "smaj", content: "maj", children: chordRoot, function: "S=maj"},
    {name: "smin", content: "min", children: chordRoot, function: "S=min"},
    {name: "smaj7", content: "maj7", children: chordRoot, function: "S=maj7"},
    {name: "smin7", content: "min7", children: chordRoot, function: "S=min7"},
    {name: "s7chrd", content: "7", children: chordRoot, function: "S=7"},
    {name: "sdim", content: "dim", children: chordRoot, function: "S=dim"},
    {name: "saug", content: "aug", children: chordRoot, function: "S=aug"},
    {name: "ssus2", content: "sus2", children: chordRoot, function: "S=sus2"},
    {name: "ssus4", content: "sus4", children: chordRoot, function: "S=sus4"},
    {name: "snone", content: "clear", children: [], function: "S=null"},
    {name: "scus", content: "custom", children: ["infoCustomC"], function: []},
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
    {name: "tuning", content: "tuning", children: tuningOps, function: []},
    //tuning types
    {name: "standard", content: "standard tuning", children: [], function: "T=E A D G B E"},
    {name: "NewST", content: "all fifths (NST)", children: [], function: "T=C G D A E G"},
    {name: "fifths", content: "all fifths (Mandoguitar)", children: [], function: "T=C G D A E B"},
    {name: "drop d", content: "drop d", children: [], function: "T=D A D G B E"},
    {name: "DADGAD", content: "Dad-Gad", children: [], function: "T=D A D G A D"},
    {name: "custom", content: "custom", children: ["infoCustomT"], function: []},
    
    //info
    {name: "infoCustomT", content: "> for custom tuning use the input boxes beside the fretboard", children: tuningOps, function: []},
    {name: "infoCustomC", content: "> click on the fretboard to alter chord", children: [], function: []}

    //test items
    //,
    //{name: "parent", content: "parent", children: ["child","child2"], function: []},
    //{name: "child", content: "it worked", children: [], function: []},
    //{name: "child2", content: "it worked again", children: [], function: []}

    //placeholder
    //"temp", content: "placeholder", children: []}
]