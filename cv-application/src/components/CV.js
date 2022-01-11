import React from "react";

function CV({ info }) {
    const fullName = `${info.firstName} ${info.lastName}`
    const contactInfo = `${info.email} | ${info.phoneNo}`

    return (
    <div className="CV">
        <div className="header">
        <h1>{fullName}</h1>
        <p>{contactInfo}</p>
    </div>
    <hr />

    <h2>Skills</h2>
    <div className="skills">
        <div className="left-column">
            <p>Programming Languages</p>
            <p>Frameworks</p>
            <p>Developer Tools</p>
        </div>
        
        <div>
            <p>{`${info.programmingLanguages}`}</p>
            <p>{`${info.frameWorks}`}</p>
            <p>{`${info.developerTools}`}</p>      
        </div>
    </div>
    <hr />

    <h2>Work Experiences</h2>
    <div className="experiences-list">
        <div className="experience">
            <div className="title">
                <p>East Side Games Studio</p>
                <p>September 2021 - May 2022</p>
            </div>
            <p>Software Engineer - IdleKit</p>
            <ul>
                <li>Refactored thousands of lines of legacy code</li>
                <li>Added hundreds of unit tests</li>
            </ul>
        </div>

        <div className="experience">
            <b>Spellrise</b>
            <ul>
                <li>Collaborated with a team of 9 students on a 2D top-down adventure mobile game using Unity.</li>
                <li>Single-handedly developed and maintained core gameplay aspects including the player’s inventory
and equipment management system, the game quest system, and enemy AI behavior using C#.</li>
                <li>Designed the player’s menu user interface including player inventory and equipment system, player
quest board, and character creation screen using Unity UI tools.</li>
            </ul>
        </div>
    </div>
    <hr />

    <h2>Education</h2>
    <div className="title">
        <p>{info.university}</p>
        <p>{info.graduationDate}</p>
    </div>
    
    <p>Bachelor of Science in Computer Science</p>  
    </div>
    )
}

export default CV;