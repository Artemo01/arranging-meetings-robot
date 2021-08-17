import React, { useState } from 'react';
import './App.css';
import CalendarPage from './components/Calendar';
import MeetingForm from './components/MeetingForm';
import Summary from './components/Summary';
import TimeSelection from './components/TimeSelection';
import MeetingHours from './data/mock_data (1).json';

function App() {

  const [curretStep, setCurrentStep] = useState(1);

  const [meetingDate, setMeetingDate] = useState("");

  const [meetingHour, setMeetingHour] = useState("");

  const [requireMessage, setRequireMessage] = useState("");

  //FORM PAGE INFORMATIONS
  const [userName, setUserName] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [userEmail, setUserEmail] = useState("");
  //######################

  const backStep = () => {
    setCurrentStep(prevVal => prevVal - 1);
    setRequireMessage("");
  }

  const updateMeetingDate = (date: string) => {
    setMeetingDate(date)
    setCurrentStep(prevVal  => prevVal + 1)
  }

  const updateMeetingHour = (hour: string) => {
    setMeetingHour(hour)
    setCurrentStep(prevVal  => prevVal + 1)
  }

  const updateName = (name:string) => {
    setUserName(name);
  }
  const updatePhoneNumber = (number:string) => {
    setUserPhoneNumber(number);
  }
  const updateEmail = (email:string) => {
    setUserEmail(email);
  }

  const formSubmit = () => {
    if(userName === "" || userPhoneNumber === "" || userEmail === ""){
      setRequireMessage("Wymagane");
    }
    else{
      setCurrentStep(prevVal  => prevVal + 1)
    }
  }

  const summaryBack = () => {
    setCurrentStep(prevVal  => prevVal - 1);
    setUserName("");
    setUserEmail("");
    setUserPhoneNumber("");
    setRequireMessage("");
  }

  const selectedItem = MeetingHours.find(item => item.date === meetingDate);

  const dates = MeetingHours.map((meetingHour) => (meetingHour.date));

  const dispalyHoursButtons = () => {
    return MeetingHours.filter(({date}) => date === selectedItem?.date)
                .map(({meetings}) => 
                    meetings.map((param) => (<button className="btn" onClick={()=>{updateMeetingHour(param.start + " - " + param.end)}}>{param.start}-{param.end}</button>)))
  }

  return (
    <div className="App">
      <div className="ComponentBox">
        {curretStep === 1 && <CalendarPage updateMeetingDate={updateMeetingDate} selectedItem={selectedItem} dates={dates}/>}
        {curretStep === 2 && <TimeSelection backStep={backStep} selectedItem={selectedItem} dispalyHoursButtons={dispalyHoursButtons}/>}
        {curretStep === 3 && <MeetingForm formSubmit={formSubmit} backStep={backStep} updateName={updateName} updatePhoneNumber={updatePhoneNumber} updateEmail={updateEmail} requireMessage={requireMessage}/>}
        {curretStep === 4 && <Summary summaryBack={summaryBack} meetingDate={meetingDate} meetingHour={meetingHour} userName={userName} userPhoneNumber={userPhoneNumber} userEmail={userEmail}/>}
      </div>
    </div>
  );
}

export default App;