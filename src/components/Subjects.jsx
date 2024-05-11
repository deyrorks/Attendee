import React, { useState } from 'react';
import '../App.css';
import Batch from './Batch';
import Semesters from './Semesters';

const Subjects = ({ sem }) => {
  const subject = {
    1: ['EM1', 'PPS', 'EP', 'BCE'],
    2: ['EM2', 'DSA', 'EC', 'BME'],
    3: ['AEM', 'DE', 'Linux'],
    4: ['AEM2', 'DCCN', 'CSGO'],
    5: ['OOP', 'AOA', 'Sub2', 'Sub4'],
    6: ['DIP', 'OS', 'Dota', 'Pub'],
    7: ['DS', 'CS2', 'COC', 'AE3'],
    8: ['VAL', 'DM', 'OK3', 'Pk4']
  };

  const subjectButtons = subject[sem];
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

  const handleSubjectClick = (subject, index, event) => {
    event.preventDefault();
    setSelectedSubject(subject);
    setSelectedButtonIndex(index);
  };

  return (
    <div>
      {sem && subjectButtons ? (
        <div id='container' style={{ paddingBottom: '1em', display: 'flex', flexWrap: 'wrap'}}>
          {subjectButtons.map((subject, index) => (
            <button
              key={index}
              onClick={(event) => handleSubjectClick(subject, index, event)}
              style={{ backgroundColor: selectedButtonIndex === index ? '#D6FFED' : '' }}
            >
              {subject}
            </button>
          ))}
        </div>
      ) : null}
      {/* {selectedSubject && <p>Selected Subject: {selectedSubject}</p>} */}
      {selectedSubject ? <Batch /> : <div id='container' style={{ padding: '1em', paddingBottom: '2em' }}></div>}
      {/* selectedSub={selectedSubject} */}
    </div>
  );
};

export default Subjects;
