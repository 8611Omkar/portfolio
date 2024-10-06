import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'AMS',
      role: 'Talent Acquisition Manager',
      duration: 'Apr 2023 - Present',
      description: 'Responsible for leading a team of 10-12 sourcing professionals and defining talent acquisition strategies.'
    },
    {
      company: 'Goldman Sachs',
      role: 'Sourcing Lead',
      duration: 'Aug 2022 - Mar 2023',
      description: 'Developed and executed a strategic talent acquisition plan aligned with the company’s hiring needs.'
    },
    // Add more experiences here...
  ];

  return (
    <section className="experience">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3>{exp.role} @ {exp.company}</h3>
          <p>{exp.duration}</p>
          <p>{exp.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Experience;
