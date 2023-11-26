import { useEffect, useState } from "react";
import SurveyCard from "./SurveyCard";

const Survey = () => {

    const [survey, setSurvey] = useState([]);
    console.log(survey)

    useEffect(()=>{
        fetch('http://localhost:5000/survey')
        .then(res => res.json())
        .then(data => setSurvey(data))
    }, [])

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    survey?.map(survey => <SurveyCard key={survey.id} survey={survey}></SurveyCard>)
                }
            </div>
        </div>
    );
};

export default Survey;