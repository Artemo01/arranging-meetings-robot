import React, { useState } from 'react';
import './App.css';
import CalendarPage from './components/Calendar';
import MeetingForm from './components/MeetingForm';
import Summary from './components/Summary';
import TimeSelection from './components/TimeSelection';
import MeetingHours from './data/mock_data (1).json';

export interface ISavedSummary {
  name: string;
  email: string;
  phone: string;
  date: string;
  hour: string;
  comment: string;
}

export interface ITakeDetails {
  name: string;
  email: string;
  phone: string;
  comment: string;
}

function App() {

  const [currentStep, setCurrentStep] = useState(0);

  const [meetingDate, setMeetingDate] = useState("");

  const [meetingHour, setMeetingHour] = useState("");

  const [savedSummary, setSavedSummary] = useState<ISavedSummary>();

  const selectedItem = MeetingHours.find(item => item.date === meetingDate);

  const dates = MeetingHours.map((meetingHour) => (meetingHour.date));

  //const [datesFilter, setDatesFilter] = useState();

  const backStep = () => {
    setCurrentStep(prevVal => prevVal - 1);
  }
  const nextStep = () => {
    setCurrentStep(prevVal => prevVal + 1);
  }

  const updateMeetingDate = (date: string) => {
    setMeetingDate(date)
    nextStep()
  }

  const updateMeetingHour = (hour: string) => {
    setMeetingHour(hour)
    nextStep()
  }

  const updateSummary = (data: ITakeDetails) => {
    const summary: ISavedSummary = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      date: meetingDate,
      hour: meetingHour,
      comment: data.comment
    }; 
    if(data.name !== "" && data.email !== "" && data.phone.length === 9 && data.phone !== ""){
      setSavedSummary(summary);
      nextStep()
    }
  }

  const filterHours = MeetingHours.find((day) => (day.date === meetingDate))?.meetings;

  // const displayHoursButtons = () => {
  //   return MeetingHours.filter(({date}) => date === selectedItem?.date)
  //               .map(({meetings}) => 
  //                   meetings.map((param) => (<button className="btn" onClick={()=>{updateMeetingHour(`${param.start}-${param.end}`)}}>{param.start}-{param.end}</button>)))
  // }

  enum selectedPage{
    CalendarPage,
    TimeSelectionPage,
    MeetingFormPage,
    SummaryPage
  }

  return (
    <div className="App">
      <div className="ComponentBox">
        {currentStep === selectedPage.CalendarPage && <CalendarPage updateMeetingDate={updateMeetingDate} dates={dates}/>}
        {currentStep === selectedPage.TimeSelectionPage && <TimeSelection backStep={backStep} selectedItem={selectedItem} updateMeetingHour={updateMeetingHour} filterHours={filterHours ? filterHours : []}/>}
        {currentStep === selectedPage.MeetingFormPage && <MeetingForm backStep={backStep} updateSummary={updateSummary}/>}
        {currentStep === selectedPage.SummaryPage && <Summary backStep={backStep} summary={savedSummary}/>}
      </div>
    </div>
  );
}

export default App;