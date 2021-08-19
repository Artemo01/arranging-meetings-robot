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

    //const [requireMessage, setRequireMessage] = useState("");
    const [incorrectName, setIncorrectName] = useState("")
    const [incorrectEmail, setIncorrectEmail] = useState("")
    const [incorrectPhone, setIncorrectPhone] = useState("")

    const submit = () => {
        if(saveName === "" || savePhone === "" || saveEmail === ""){
            setIncorrectName("Wymagane")
            setIncorrectEmail("Wymagane")
            setIncorrectPhone("Wymagane")
        }
        else if(savePhone.length > 9 || savePhone.length < 9){
            setIncorrectPhone("niepoprawny numer")
            setIncorrectName("")
            setIncorrectEmail("")
        }
        else if(!saveEmail.includes("@")){
            setIncorrectPhone("")
            setIncorrectName("")
            setIncorrectEmail("Niepoprawny email")
        }
        else{
            // updateName(saveName);
            // updateEmail(saveEmail);
            // updatePhoneNumber(savePhone);
            const details: ITakeDetails = {
                name: saveName,
                email: saveEmail,
                phone: savePhone,
                comment: ""
              }; 
            updateSummary(details);
            // nextStep()
        }
    }

    return(
        <div>
            <h1 className="page-title">Formularz do spotkania</h1>
            <div className="form-container">
                <div className="message-warning-box">
                    {incorrectName}
                </div>
                <div className="input-box">
                    *
                    <input className="inputClass" placeholder="Imię i Nazwisko" onChange={e =>setSaveName(e.target.value)}/>
                </div>
                <div className="message-warning-box">
                    {incorrectPhone}
                </div>
                <div className="input-box">
                    *
                    <input type="number" className="inputClass" placeholder="Numer telefonu" onChange={e=>setSavePhone(e.target.value)}/>
                </div>
                <div className="message-warning-box">
                    {incorrectEmail}
                </div>
                <div className="input-box">
                    *
                    <input type="email" className="inputClass" placeholder="Email" onChange={e=>setSaveEmail(e.target.value)}/>
                </div>
                <textarea className="text-area" placeholder="Notatka"/>
            </div>
            <div className="form-buttons">
                <button type="submit" className="btn-form" onClick={submit}>Potwiedź</button>
                <button className="btn-form" onClick={backStep}>Cofnij</button>
            </div>
        </div>
    )
}

export default MeetingForm;