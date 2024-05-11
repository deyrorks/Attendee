import React from 'react'
import '../App.css'; // Import CSS file for styling
import Semesters from '../components/Semesters';
import Subjects from '../components/Subjects';
import Navbar from '../components/Navbar';
// import Scan from '../components/scan';
// import QrModal from '../components/n_scan';


const teacher = () => {
    
  
    return (
      <>
          <Navbar />
          
          <Semesters />

          <Subjects />
          

          {/* <Scan />  */}
          
      </>
    );
}
   
export default teacher;
