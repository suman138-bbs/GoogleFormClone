import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Mcq from './components/mcq/mcq.component';
import Title from './components/title/title.component';
import CheckBox from './components/checkbox/checkbox.component';
import ShortAnswer from './components/shortAnswer/shortAnswer.component';
import Paragrph from './components/paragraph/paragraph.component';
import DropDown from './components/dropDown/dropDown.component';
import FileUpload from './components/fileUpload/fileUpload.component';
import LinearScale from './components/linerScale/LinearScale.component';
import MultiChoiceGrid from './components/multiChoiceGrid/multiChoiceGrid.component';
import TickBoxGrid from './components/tickBoxGrid/tickBoxGrid.component';
import Footer from './components/footer/footer.component';
function App() {
  return (
    <div className='m-container'>
      <Title />

      {/* MCQ (Multiple Choice Question) */}
      <Mcq/>

      {/* Checkbox */}
      <CheckBox/>
      {/* Short Answer */}
      
      
         <ShortAnswer/>

      {/* Paragraph */}
        <Paragrph/>
      {/* Dropdown */}
      <DropDown/>

      {/* File Upload */}
      
     <FileUpload/>
      {/* Linear Scale */}
      <LinearScale/>

      {/* Multi-choice Grid */}
      
     <MultiChoiceGrid/>
      {/* Tick Box Grid */}
      <TickBoxGrid/>
       <Footer/>
    </div>
  );
}

export default App;
