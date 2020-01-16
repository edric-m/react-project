let bufferSize = 380000;//best value 380000 why?;
let bufferPos = 0;
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

async function FindPowerOfNote ( chunk, i ) {
    //let result = [];
    //for ( let i = 0; i < 12; i++ ) {\
    //console.log(chunk.length);
    let re = 0; //these two should be a running total
    let im = 0;
    for ( let k = 1; k < 128; k*=2 ) {
        for ( let n = 0; n < chunk.length; n++) {
            bufferPos ++;
            if (bufferPos === bufferSize) {
                bufferPos = 0;
            } 
            let angle = (Math.PI * 2 * notes[i].freq * k * bufferPos) / bufferSize; 
            //n is buffer que position, N is buffer size
            re += chunk[n] * Math.cos(angle);
            im -= chunk[n] * Math.sin(angle);
        }
    }
    //calculate power for this note, then append it to the return variable
    let pwr = (Math.pow(re,2) + Math.pow(im,2)) / bufferSize;
    //let tempNote = notes[i].note;
    //result.push({tempNote,pwr});
    notes[i].powerTotal += pwr;
    //return {tempNote, pwr};
    //}
    
    
    //for audio chunk 
    //return result; //maybe remove frequencies from object
}