import React, { ReactNode } from "react";

interface ISummary
{
    summaryBack: () => void;
    displaySummary: () => ReactNode;
}
const Summary:React.FC<ISummary> = ({summaryBack, displaySummary}) => {
    return(
        <div>
            <h1 className="page-title">Podsumowanie</h1>
            <div className="summary-container">
                {displaySummary()}             
            </div>
            <button className="btn" onClick={summaryBack}>Cofnij</button>
        </div>
    )
}

export default Summary;