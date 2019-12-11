/*
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

let bufferPos = 0;
let bufferSize = 400000; //400000 -size from testing
*/
self.addEventListener('message', e => { 
    //will it wait for the previous chunk to be calculated 
    //before starting work on the new chunk?
    postMessage(e.data + " to you too");
    //let noteWeights = FindNote( e.data );
    //self.postMessage(noteWeights);
});

/*
const FindNote = ( chunk ) => {
    //create new blob? ---------------------------------TODO:
    //transform to arraybuffer
    //decodeaudiodata()
    //getchannel 0
    let superBuffer = new Blob(chunk);
    let audioData = await new Response(superBuffer).arrayBuffer();
    let ctx = new (window.AudioContext || window.webkitAudioContext)();
    let decodedAudio = await ctx.decodeAudioData(audioData);

    for ( let i = 0; i < 12; i++ ) {
        let re = 0; //these two should be a running total
        let im = 0;
        for ( let k = 1; k < 128; k*=2 ) {
            for ( let n = 0; n < decodedAudio.length; n++) {
                bufferPos += n;
                if (bufferPos === buffersize) {
                    bufferPos = 0;
                } 
                const angle = (Math.PI * 2 * notes[i].freq * k * bufferPos) / bufferSize; //n is buffer que position, N is buffer size
                re += decodedAudio[n] * Math.cos(angle);
                im -= decodedAudio[n] * Math.sin(angle);
            }
        }
        //calculate power for this note, then append it to the return variable
        let pwr = (Math.pow(re,2) + Math.pow(im,2)) / N;
        notes[i].powerTotal += pwr; //TODO: change to return only note with weight
    }
    
    //for audio chunk 
    console.log("end calc");
    return notes; //maybe remove frequencies from object
}

/*
addHarmonics (x, freq) {
        let N = x.length;
        let total = 0;

        for (let k = 1; (k * freq) < N; k*=2) {
            let re = 0;
            let im = 0;
            for (let n = 0; n < N; n++) {
                const angle = (Math.PI * 2 * freq * k * n) / N;
                re += x[n] * Math.cos(angle);
                im -= x[n] * Math.sin(angle);
            }
            //let amp = (Math.sqrt(Math.pow(re,2) + Math.pow(im, 2)) * 2) / N;
            let pwr = (Math.pow(re,2) + Math.pow(im,2)) / N; //may be better to determine based on power
            //maybe use a combination of amp and pwr
            total += pwr;
        }
        return total;
    }
    dft(x) {
        let returnList = [];
        let avg = 0;
        let sum = 0;

        for(let i = 0; i < notes.length; i++) {
            let weight = this.addHarmonics(x, notes[i].freq);
            let note = notes[i].note;
            sum += weight;
            returnList.push({ note, weight });
        }

        avg = sum / 12;
        returnList.push(avg); //just return top 4
        return returnList;
    }

    async logStream() {
        let superBuffer = new Blob(recordedChunks);
        let audioData = [];
        let decodedAudio = [];
        let freq = [];

        audioData = await new Response(superBuffer).arrayBuffer();
        //audioData = new Uint8Array(audioData);

        let ctx = new (window.AudioContext || window.webkitAudioContext)();
        decodedAudio = await ctx.decodeAudioData(audioData);

        decodedAudio = decodedAudio.getChannelData(0);

        console.log(decodedAudio);
        freq = this.dft(decodedAudio);
        console.log(freq);

        let strongestNotes = [];
        for ( let i = 0; i < 12; i++ ) {
            if ( freq[i].weight > freq[12] ) {
                strongestNotes.push(freq[i].note);
            }
        }

        this.setState({results : JSON.stringify(strongestNotes)});

        //clear recorded audio for reuse
        recordedChunks = [];
    }
*/