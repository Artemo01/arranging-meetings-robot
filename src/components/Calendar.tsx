import React, { useState } from "react";
import '../App.css';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

interface ICalendarPage
{
    updateMeetingDate: (date:string)=>void;
    dates: string[];
}

const CalendarPage:React.FC<ICalendarPage> = ({updateMeetingDate, dates}) =>{

    const [value, onChange] = useState(new Date());
    
    return(
        <div className="Calendar">
            <h2 className="page-title">Wybierz datę spotkania</h2>
            <div>
                <Calendar
                    onChange={onChange}
                    value={value}
                    onClickDay={(value) => {updateMeetingDate(moment(value).format('YYYY-MM-DD'))}}
                    tileDisabled={({date}) => !dates.includes(moment(date).format('YYYY-MM-DD'))}
                />
            </div>
        </div>
    )
}

export default CalendarPage;