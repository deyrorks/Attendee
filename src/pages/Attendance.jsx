import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import '../App.css'
import { Toaster, toast } from 'react-hot-toast';
const Attendance = () => {
    const [selectedStudent, setSelectedStudent] = useState([])
    function handleClick(roll) {
        // setSelectedStudent([
        //     ...selectedStudent,
        //     roll
        // ])
    }
    let navigate = useNavigate();
    const routeChange = () => {
        toast.success('Attendance Submitted');
        let path = '../pages/Teacher';
        navigate(path);
    }
    return (
        <div><Toaster />
            <div style={{ color: 'white', backgroundColor: 'none', width: '100%', fontSize: '2em' }}>

                <table class="table-responsive caption-top w-100" style={{ border: '1px solid white', borderRadius: '10px' }}>
                    <caption className='text-white fw-bold pb-4 pt-4'>List of Students</caption>
                    <thead>
                        <tr className='border-1 border-light '>
                            <th scope="col">S.No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Branch</th>
                            <th scope="col">Roll No</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>CSE</td>
                            <td>343</td>
                            <td><input type='checkbox' style={{textDecoration: 'none', width: '1em'}}></input></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jac</td>
                            <td>AI</td>
                            <td>120</td>
                            <td><input type='checkbox' style={{textDecoration: 'none', width: '1em'}}></input></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Rob</td>
                            <td>AI</td>
                            <td>124</td>
                            <td><input type='checkbox' style={{textDecoration: 'none', width: '1em'}}></input></td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Jacob</td>
                            <td>ML</td>
                            <td>123</td>
                            <td><input type='checkbox' style={{textDecoration: 'none', width: '1em'}}></input></td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Larry</td>
                            <td>DS</td>
                            <td>432</td>
                            <td><input type='checkbox' style={{textDecoration: 'none', width: '1em'}}></input></td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>Garry</td>
                            <td>AI</td>
                            <td>420</td>
                            <td><input type='checkbox' style={{textDecoration: 'none', width: '1em'}}></input></td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>Mike</td>
                            <td>AI</td>
                            <td>126</td>
                            <td><input type='checkbox' style={{textDecoration: 'none', width: '1em'}}></input></td>
                        </tr>
                        <tr>
                            <th scope="row">8</th>
                            <td>Taco</td>
                            <td>ML</td>
                            <td>129</td>
                            <td><input type='checkbox' style={{textDecoration: 'none', width: '1em'}}></input></td>
                        </tr>
                        <tr>
                            <th scope="row" onClick={handleClick(435)} >9</th>
                            <td>Hiccub</td>
                            <td>DS</td>
                            <td>435</td>
                            <td><input type='checkbox' style={{textDecoration: 'none', width: '1em'}}></input></td>
                        </tr>
                    </tbody>
                </table>
                <div id='submit'>
                    <button type="button" onClick={routeChange} className='fw-bold ' style={{ borderRadius: '1px', padding: '1em', backgroundColor: '#D6FFED', width: '10em' }}> Submit </button>
                </div>
            </div>
        </div>
    )
}

export default Attendance