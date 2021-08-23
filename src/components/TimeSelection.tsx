import '../App.css';
interface ITimeSelection
{
    backStep: ()=>void;
    selectedItem: any;
    updateMeetingHour: (param: string)=>void;
    filterHours: {start: string; end: string}[];
}

const TimeSelection:React.FC<ITimeSelection> = ({ backStep, selectedItem, updateMeetingHour, filterHours}) => {

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
                {filterHours.map((param) => (<button className="btn" onClick={()=>{updateMeetingHour(`${param.start}-${param.end}`)}}>{param.start}-{param.end}</button>))}

            </div>

            <div className="back-btn-container">
                <button className="btn-back" onClick={backStep}>Cofnij</button>
            </div>
        </div>
    );
}

export default TimeSelection;