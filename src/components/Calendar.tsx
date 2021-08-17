import React, { useState } from "react";
import '../App.css';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import MeetingHours from '../data/mock_data (1).json';

interface ICalendarPage
{
    updateStep: ()=>void
    updateMeetingDate: (date:string)=>void
    selectedItem: any
}

function CalendarPage({updateStep, updateMeetingDate, selectedItem}: ICalendarPage){

    const [value, onChange] = useState(new Date());
    
    const datas = MeetingHours.map((meetingHour) => {
        return(meetingHour.date)
    })


    return(
        <div className="Calendar">
            <h2 className="page-title">Wybierz datę spotkania</h2>
            <div>
                <Calendar
                    onChange={onChange}
                    value={value}
                    onClickDay={(value) => {updateMeetingDate(moment(value).format('YYYY-MM-DD'))}}
                    tileDisabled={({date}) => !datas.includes(moment(date).format('YYYY-MM-DD'))
                        
                    }
                />
                {/* {console.log(value)}
                <p>{moment(value).format('YYYY-MM-DD')}</p> */}
                {/* <p>{moment(value).format('D')}</p> */}
                {/* <p>{value.toString()}</p> */}
                {/* <button className="btn-calendar" onClick={updateStep}>Dalej</button> */}
            </div>
        </div>
    )
}

export default CalendarPage;