import React from 'react';

const AboutPage = () => (
    <>
    <div className="about-content">
        <h1>About</h1>
        <p>This app aims to help guitarists learn the scales and chords on the fretboard on any 
            tuning configuration.</p>
        <p>The scales and chords that you choose can be displayed on the fretboard and will be displayed with 
            any altered tuning you need. The scale notes are coloured gray (scale center is dark gray) and 
            the chords will be highlighted blue and will be altered immediately according to your 
            specifications.</p>
        <p>When you permit access to your microphone the app can listen to your guitar and identify 
            what note is being played, then it immediately highlights the note on the fretboard. This feature
            can help the guitarist to quickly reorient themselves on the fretboard without having to look
            at it.</p>
        <p>The app was tested using Google Chrome and a decent computer.</p>
        <h1>&#47;&#47;TODO:</h1>
        <ul>
            <li><p>In the future it will be able to identify multiple notes 
            being played simultaneously.</p></li>
            <li><p>Expand the range/depth of chords that it can identify.</p></li>
            <li><p>More chord, scale, and tuning options will be added to the menu.</p></li>
            <li><p>Play back in real-time what the microphone records in an altered tuning.</p></li>
            <li><p>Inform the user of scales related to the chord chosen.</p></li>
        </ul>

    </div>
    
    </>
);

export default AboutPage;