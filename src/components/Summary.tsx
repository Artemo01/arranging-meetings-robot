import React from "react";

interface ISummary
{
    summaryBack: () => void;
    meetingDate: string;
    meetingHour: string;
    userName: string;
    userEmail: string;
    userPhoneNumber: string;
}

function Summary({summaryBack, meetingDate, meetingHour, userName, userEmail, userPhoneNumber}: ISummary){
    return(
        <div>
            <h1 className="page-title">Podsumowanie</h1>
            <div className="summary-container">
                <label>Imię i Nazwisko: {userName}</label>
                <label>Numer telefonu: {userPhoneNumber}</label>
                <label>Email: {userEmail}</label>
                <label>Data: {meetingDate}</label>
                <label>Godzina: {meetingHour}</label>
            </div>
            <button className="btn" onClick={summaryBack}>Cofnij</button>
        </div>
    )
}

export default Summary;