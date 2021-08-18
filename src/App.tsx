import React, { useState } from 'react';
import './App.css';
import CalendarPage from './components/Calendar';
import MeetingForm from './components/MeetingForm';
import Summary from './components/Summary';
import TimeSelection from './components/TimeSelection';
import MeetingHours from './data/mock_data (1).json';

function App() {

  const [currentStep, setCurrentStep] = useState(0);

  const [meetingDate, setMeetingDate] = useState("");

  const [meetingHour, setMeetingHour] = useState("");

  const [requireMessage, setRequireMessage] = useState("");

  //FORM PAGE INFORMATIONS
  const [userName, setUserName] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [userEmail, setUserEmail] = useState("");
  //######################

  const [savedName, setSavedName] = useState("");
  const [savedEmail, setSavedEmail] = useState("");
  const [savedPhoneNumber, setSavedPhoneNumber] = useState("");

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

  const updateSummary = () => {
    setSavedName(userName);
    setSavedEmail(userEmail);
    setSavedPhoneNumber(userPhoneNumber);
  }

  const formSubmit = () => {
    if(userName === "" || userPhoneNumber === "" || userEmail === ""){
      setRequireMessage("Wymagane");
    }
    else{
      updateSummary();
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

  const displayHoursButtons = () => {
    return MeetingHours.filter(({date}) => date === selectedItem?.date)
                .map(({meetings}) => 
                    meetings.map((param) => (<button className="btn" onClick={()=>{updateMeetingHour(`${param.start}-${param.end}`)}}>{param.start}-{param.end}</button>)))
  }

  enum selectedPage{
    CalendarPage,
    TimeSelectionPage,
    MeetingFormPage,
    SummaryPage
  }

  const displaySummary = () => {
    return(
      <div className="summary-container-details">
        <label>Imię i Nazwisko: {savedName}</label>
        <label>Numer telefonu: {savedPhoneNumber}</label>
        <label>Email: {savedEmail}</label>
        <label>Data: {meetingDate}</label>
        <label>Godzina: {meetingHour}</label>
      </div>
    )
  }

  return (
    <div className="App">
      <div className="ComponentBox">
        {currentStep === selectedPage.CalendarPage && <CalendarPage updateMeetingDate={updateMeetingDate} selectedItem={selectedItem} dates={dates}/>}
        {currentStep === selectedPage.TimeSelectionPage && <TimeSelection backStep={backStep} selectedItem={selectedItem} displayHoursButtons={displayHoursButtons}/>}
        {currentStep === selectedPage.MeetingFormPage && <MeetingForm formSubmit={formSubmit} backStep={backStep} updateName={updateName} updatePhoneNumber={updatePhoneNumber} updateEmail={updateEmail} requireMessage={requireMessage}/>}
        {currentStep === selectedPage.SummaryPage && <Summary summaryBack={summaryBack} displaySummary={displaySummary}/>}
      </div>
    </div>
  );
}

export default App;