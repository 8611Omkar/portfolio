import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = ['Strategic Sourcing', 'Leadership Hiring', 'Team Management', 'Stakeholder Management', 'Employer Branding'];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <span key={index} className="skill">{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
