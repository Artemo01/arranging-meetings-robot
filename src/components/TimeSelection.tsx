import '../App.css';
import '../App.css';
import { ReactNode } from 'react';
interface ITimeSelection
{
    backStep: ()=>void;
    selectedItem: any;
    dispalyHoursButtons: ()=> ReactNode;
}

// "2021-08-13"

function TimeSelection({ backStep, selectedItem, dispalyHoursButtons}: ITimeSelection){

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
                {dispalyHoursButtons()}

            </div>

            <div className="back-btn-container">
                <button className="btn-back" onClick={backStep}>Cofnij</button>
            </div>
        </div>
    );
}

export default TimeSelection;