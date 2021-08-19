import React from "react";
import { useState } from "react";
import { ITakeDetails } from "../App";

interface IMeetingForm
{
    //updateStep: ()=>void;
    backStep: () => void;
    updateSummary: (data: ITakeDetails) => void;
}

const MeetingForm:React.FC<IMeetingForm> = ({backStep, updateSummary}) => {

    const [saveName, setSaveName] = useState("");
    const [savePhone, setSavePhone] = useState("");
    const [saveEmail, setSaveEmail] = useState("");
    const [saveComment, setSaveComment] = useState("---");

    //const [btnColour, setBtnColour] = useState("rgb(189, 146, 230)")

    const isNameValid = (name: string): boolean => saveName !== "";

    const isPhoneValid = (phone: string): boolean => savePhone.length === 9;

    const isEmailValid = (email: string): boolean => (saveEmail.includes("@"));

    const isDataValid = isNameValid(saveName) && isPhoneValid(savePhone) && isEmailValid(saveEmail); 

    const submit = () => {
        const details: ITakeDetails = {
            name: saveName,
            email: saveEmail,
            phone: savePhone,
            comment: saveComment
        }; 
        updateSummary(details);
    }

    return(
        <div>
            <h1 className="page-title">Formularz do spotkania</h1>
            <div className="form-container">
                
                <div className="message-warning-box">
                    {isNameValid(saveName) ? "" : "wymagane"}
                </div>
                <div className="input-box">
                    *
                    <input className="inputClass" placeholder="Imię i Nazwisko" onChange={e =>setSaveName(e.target.value)}/>
                </div>
                <div className="message-warning-box">
                    {isPhoneValid(savePhone) ? "" : "niepoprawny numer"}
                </div>
                <div className="input-box">
                    *
                    <input type="number" className="inputClass" placeholder="Numer telefonu" onChange={e=>setSavePhone(e.target.value)}/>
                </div>
                <div className="message-warning-box">
                    {isEmailValid(saveEmail) ? "" : "niepoprawny email"}
                </div>
                <div className="input-box">
                    *
                    <input type="email" className="inputClass" placeholder="Email" onChange={e=>setSaveEmail(e.target.value)}/>
                </div>
                <textarea className="text-area" placeholder="Notatka" onChange={e=>setSaveComment(e.target.value)}/>
            </div>
            <div className="form-buttons">
                <button type="submit" className={isDataValid ? "btn-form-enable" : "btn-form-disable"}  onClick={submit}>Potwiedź</button>
                <button className="btn-form-back" onClick={backStep}>Cofnij</button>
            </div>
        </div>
    )
}

export default MeetingForm;