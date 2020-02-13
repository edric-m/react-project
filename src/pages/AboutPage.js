import React from 'react';

const AboutPage = () => (
    <>
    <div className="about-content">
        <h1>About</h1>
        <p>This tool aims to help guitarists learn the scales and chords on the fretboard in any 
            tuning configuration.</p>
        <p>Scales and chords that you choose can be displayed on the fretboard and will be displayed with 
            any altered tuning you need though a highly responsive user interface. The scale notes will 
            be coloured gray and the chords will be highlighted blue.</p>
        <p>When you permit access to your microphone the app can listen to your guitar and identify 
            what note is being played then highlight the note on the fretboard.</p>
        <h1>&#47;&#47;TODO:</h1>
        <ul>
            <li><p>Chord choice bug fixes.</p></li>
            <li><p>In the future it will be able to identify multiple notes 
            being played simultaneously.</p></li>
            <li><p>Widen the range of chords that it can identify.</p></li>
            <li><p>More chord, scale, and tuning options will be added eventually.</p></li>
            <li><p>Play back in real-time what the microphone records in an altered tuning.</p></li>
            <li><p>Inform key centers related to the chord chosen.</p></li>
        </ul>

    </div>
    
    </>
);

export default AboutPage;