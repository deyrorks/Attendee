import React, { useState } from 'react';

import Subjects from './Subjects';

const Semesters = () => {
    // State variables for semesters and subject selection
    const [semester, setSemester] = useState('');
    const [selectedButton, setSelectedButton] = useState('');
 
    const handleSemesterSelection = (selectedSemester, event) => {
        event.preventDefault(); // Prevent the default behavior of the button click
        setSemester(selectedSemester);
        setSelectedButton(selectedSemester);
    };
    return (
        <div id='container'>
           <form>
                <h2 id='back' style={{marginTop: '1em'}}>Select Semester</h2>
                <div>
                    <button style={{ backgroundColor: selectedButton === '1' ? '#D6FFED' : '' }} onClick={(e) => handleSemesterSelection('1', e)}>Semester 1</button>
                    <button style={{ backgroundColor: selectedButton === '2' ? '#D6FFED' : '' }} onClick={(e) => handleSemesterSelection('2', e)}>Semester 2</button>
                    <button style={{ backgroundColor: selectedButton === '3' ? '#D6FFED' : '' }} onClick={(e) => handleSemesterSelection('3', e)}>Semester 3</button>
                    <button style={{ backgroundColor: selectedButton === '4' ? '#D6FFED' : '' }} onClick={(e) => handleSemesterSelection('4', e)}>Semester 4</button>
                    <button style={{ backgroundColor: selectedButton === '5' ? '#D6FFED' : '' }} onClick={(e) => handleSemesterSelection('5', e)}>Semester 5</button>
                    <button style={{ backgroundColor: selectedButton === '6' ? '#D6FFED' : '' }} onClick={(e) => handleSemesterSelection('6', e)}>Semester 6</button>
                    <button style={{ backgroundColor: selectedButton === '7' ? '#D6FFED' : '' }} onClick={(e) => handleSemesterSelection('7', e)}>Semester 7</button>
                    <button style={{ backgroundColor: selectedButton === '8' ? '#D6FFED' : '' }} onClick={(e) => handleSemesterSelection('8', e)}>Semester 8</button>
                </div>

                <h2 id='back'>Select Subject</h2>
                {semester ? <Subjects sem={semester} /> : <div id='container' style={{ padding: '1em', paddingBottom: '2em' }}>Please Select a Semester</div>}
            </form>
        </div>
        
    );
}

export default Semesters;
