import '../App.css';
import MeetingHours from '../data/mock_data (1).json';
import '../App.css';
//import moment from 'moment';

interface ITimeSelection
{
    updateStep: ()=>void;
    backStep: ()=>void;
    meetingDate: string;
    selectedItem: any;
    updateMeetingHour: (hour:string) => void;
}

// "2021-08-13"

function TimeSelection({updateStep, backStep, meetingDate, selectedItem, updateMeetingHour}: ITimeSelection){

    //let selectedItem = MeetingHours.find(item => item.date === meetingDate);

    return(
        <div>
            <h2 className="page-title">Wybierz godzinę spotkania dnia {selectedItem?.date}</h2>
            {/* <div className="HoursButtonsContainer">
                {MeetingHours.map((meetingHour, key) => {
                    return <div>
                        <button className="btn">{meetingHour.date}</button>
                    </div>
                })}
            </div> */}
            <div className="btns-time-selection">
                {MeetingHours.filter(({date}) => date === selectedItem?.date)
                .map(({meetings}) => 
                    meetings.map((param) => <button className="btn" onClick={()=>{updateMeetingHour(param.start + " - " + param.end)}}>{param.start}-{param.end}</button>))}
            </div>

            <div className="back-btn-container">
                <button className="btn-back" onClick={backStep}>Cofnij</button>
            </div>
        </div>
    );
}

export default TimeSelection;