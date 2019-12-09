let notes = [
    {note : "C" , freq : 16.35, powerTotal : 0},//32.7032},
    {note : "C#", freq : 17.32, powerTotal : 0},//34.6478},
    {note : "D", freq : 18.35, powerTotal : 0},//36.7081},
    {note : "D#", freq : 19.45, powerTotal : 0},//38.8909},
    {note : "E", freq : 20.6, powerTotal : 0},//41.2034},
    {note : "F", freq : 21.83, powerTotal : 0},//43.6535},
    {note : "F#", freq : 23.12, powerTotal : 0},//46.2493},
    {note : "G", freq : 24.5, powerTotal : 0},//48.9994},
    {note : "G#", freq : 25.96, powerTotal : 0},//51.9131},
    {note : "A" , freq : 27.5, powerTotal : 0},//55},
    {note : "A#", freq : 29.14, powerTotal : 0},//58.2705},
    {note : "B", freq : 30.87, powerTotal : 0}//61.7354}
];

const FindNote = ( chunk, bufferPos, bufferSize ) => {

    for ( let i = 0; i < 12; i++ ) {
        let re = 0; //these two should be a running total
        let im = 0;
        for ( let k = 1; k < 128; k*=2 ) {
            const angle = (Math.PI * 2 * notes[i].freq * k * bufferPos) / bufferSize; //n is buffer que position, N is buffer size
            re += chunk * Math.cos(angle);
            im -= chunk * Math.sin(angle);
        }
        //calculate power for this note, then append it to the return variable
        let pwr = (Math.pow(re,2) + Math.pow(im,2)) / N;
        notes[i].powerTotal += pwr;
    }
    
    //for audio chunk 

    return notes;
}

export default FindNote;