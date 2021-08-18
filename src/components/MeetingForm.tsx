import React from "react";
//import { useState } from "react";
interface IMeetingForm
{
    //updateStep: ()=>void;
    backStep: () => void;
    updateName: (name:string)=>void;
    updateEmail: (email:string) => void;
    updatePhoneNumber: (number:string) => void;
    formSubmit: () => void;
    requireMessage: string;
}

const MeetingForm:React.FC<IMeetingForm> = ({backStep, updateName, updateEmail, updatePhoneNumber, formSubmit, requireMessage}) => {

    //const [saveName, setSaveName] = useState("");

    return(
        <div>
            <h1 className="page-title">Formularz do spotkania</h1>
            <div className="form-container">
                <div className="message-warning-box">
                    {requireMessage}
                </div>
                <div className="input-box">
                    *
                    <input className="inputClass" placeholder="Imię i Nazwisko" onChange={e =>updateName(e.target.value)}/>
                </div>
                <div className="message-warning-box">
                    {requireMessage}
                </div>
                <div className="input-box">
                    *
                    <input type="number" className="inputClass" placeholder="Numer telefonu" onChange={e=>updatePhoneNumber(e.target.value)}/>
                </div>
                <div className="message-warning-box">
                    {requireMessage}
                </div>
                <div className="input-box">
                    *
                    <input type="email" className="inputClass" placeholder="Email" onChange={e=>updateEmail(e.target.value)}/>
                </div>
                <textarea className="text-area" placeholder="Notatka"/>
            </div>
            <div className="form-buttons">
                <button type="submit" className="btn-form" onClick={formSubmit}>Potwiedź</button>
                <button className="btn-form" onClick={backStep}>Cofnij</button>
            </div>
        </div>
    )
}

export default MeetingForm;