import {ISavedSummary} from "../App";
interface ISummary
{
    backStep: () => void;
    summary: ISavedSummary | undefined;

}
const Summary:React.FC<ISummary> = ({backStep, summary}) => {
    return(
        <div>
            <h1 className="page-title">Podsumowanie</h1>
            <div className="summary-container">
                <label>Imię i Nazwisko: {summary?.name}</label>
                <label>Numer telefonu: {summary?.phone}</label>
                <label>Email: {summary?.email}</label>
                <label>Data: {summary?.date}</label>
                <label>Godzina: {summary?.hour}</label>
                <label>Komentarz: {summary?.comment}</label>            
            </div>
            <button className="btn" onClick={backStep}>Cofnij</button>
        </div>
    )
}

export default Summary;