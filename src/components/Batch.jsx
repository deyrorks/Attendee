import React, { useState } from 'react'
import Attendance from '../pages/Attendance';
import { useNavigate, NavLink } from "react-router-dom";
const Batch = ({ sem, sub }) => {
    // State variables for semesters and subject selection
    const [batch, setBatch] = useState(''); //we'll passon the batch to mongo
    const [selectedButton, setSelectedButton] = useState('');

    const handleBatchSelection = (selectedbatch, event) => {
        event.preventDefault(); // Prevent the default behavior of the button click
        setBatch(selectedbatch);
        setSelectedButton(selectedbatch);
    };

    let navigate = useNavigate();
    const routeChange = () => {
        let path = '../pages/Attendance';
        navigate(path);
    }
    return (
        <div >
            <div id='container'>
                <p>{sem}{sub}</p>
                <form>
                    <h2 id='back'>Select Batch</h2>
                    <div>
                        <button style={{ backgroundColor: selectedButton === '1' ? '#D6FFED' : '' }} onClick={(e) => handleBatchSelection('1', e)}> A 1</button>
                        <button style={{ backgroundColor: selectedButton === '2' ? '#D6FFED' : '' }} onClick={(e) => handleBatchSelection('2', e)}> A 2</button>
                        <button style={{ backgroundColor: selectedButton === '3' ? '#D6FFED' : '' }} onClick={(e) => handleBatchSelection('3', e)}> A 3</button>
                        <button style={{ backgroundColor: selectedButton === '4' ? '#D6FFED' : '' }} onClick={(e) => handleBatchSelection('4', e)}> B 1</button>
                        <button style={{ backgroundColor: selectedButton === '5' ? '#D6FFED' : '' }} onClick={(e) => handleBatchSelection('5', e)}> B 2</button>
                        <button style={{ backgroundColor: selectedButton === '6' ? '#D6FFED' : '' }} onClick={(e) => handleBatchSelection('6', e)}> B 3</button>
                        <button style={{ backgroundColor: selectedButton === '7' ? '#D6FFED' : '' }} onClick={(e) => handleBatchSelection('7', e)}> C 1</button>
                        <button style={{ backgroundColor: selectedButton === '8' ? '#D6FFED' : '' }} onClick={(e) => handleBatchSelection('8', e)}> C 2</button>
                    </div>
                    {/* <h2 id='back'>Select Subject</h2> */}

                    {selectedButton != '' ? <div className='d-flex align-items-center justify-content-center pt-2 '>
                        <button type="button" onClick={routeChange} className='fw-bold ' style={{ borderRadius: '1px', padding: '1em', backgroundColor: '#D6FFED', width: '10em' }}>Attendance</button>

                    </div> : ''}

                </form>
            </div>
        </div>

    )
}

export default Batch
