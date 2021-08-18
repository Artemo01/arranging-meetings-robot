import '../App.css';
import '../App.css';
import { ReactNode } from 'react';
interface ITimeSelection
{
    backStep: ()=>void;
    selectedItem: any;
    displayHoursButtons: ()=> ReactNode;
}

// "2021-08-13"

const TimeSelection:React.FC<ITimeSelection> = ({ backStep, selectedItem, displayHoursButtons}) => {

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
                {displayHoursButtons()}

            </div>

            <div className="back-btn-container">
                <button className="btn-back" onClick={backStep}>Cofnij</button>
            </div>
        </div>
    );
}

export default TimeSelection;