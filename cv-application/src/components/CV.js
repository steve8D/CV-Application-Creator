import React from "react";
import ExperienceDetailsItem from "./reuseable-views/ExperienceDetailsItem";

function CV({ info }) {
  const fullName = `${info.firstName} ${info.lastName}`;
  const contactInfo = `${info.email} | ${info.phoneNo}`;

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
          <p>{info.programmingLanguages}</p>
          <p>{info.frameWorks}</p>
          <p>{info.developerTools}</p>
        </div>
      </div>
      <hr />

      <h2>Work Experiences</h2>
      <div className="experiences-list">
        {info.experiences.map((experience) => (
          <ExperienceDetailsItem
            key={experience.id}
            experienceInfo={experience}
          ></ExperienceDetailsItem>
        ))}
      </div>
      <hr />

      <h2>Education</h2>
      <div className="title">
        <p>{info.university}</p>
        <p>{info.graduationDate}</p>
      </div>

      <p>{info.degreeTitle}</p>
    </div>
  );
}

export default CV;
