import { useEffect, useState } from "react";
import LatestSurvey from "./LatestSurvey";

const LSurvey = () => {

    const [latestSurvey, setLatestSurvey] = useState([]);

    useEffect(()=>{
        fetch('https://assignment-survey-resource-server.vercel.app/LatestSurvey')
        .then(res => res.json())
        .then(data => setLatestSurvey(data))
    }, [])

    return (
        <div>
            <h2 className="text-5xl text-center my-10 font-bold uppercase italic text-orange-600">Our Latest Survey</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    latestSurvey?.map(latest => <LatestSurvey key={latest.id} latest={latest}></LatestSurvey>)
                }
            </div>
        </div>
    );
};

export default LSurvey;