import React from 'react';

const AboutPage = () => (
    <>
    <div className="about-content">
        <h1>About</h1>
        <p>This tool aims to help guitarists learn the scales and chords on the fretboard in any 
            tuning configuration.</p>
        <p>The scales and chords that you choose will be displayed on the fretboard and works with 
            any altered tuning possible.</p>
        <p>When you permit access to your microphone the app can listen to your guitar and identify 
            what note is being played.</p>
        <h1>&#47;&#47;TODO:</h1>
        <ul>
            <li><p>In the future it will be able to identify multiple notes 
            being played simultaneously.</p></li>
            <li><p>More chord, scale, and tuning options will be added eventually.</p></li>
            <li><p>Play back in real-time what the microphone records in an altered tuning.</p></li>
        </ul>

    </div>
    
    </>
);

export default AboutPage;