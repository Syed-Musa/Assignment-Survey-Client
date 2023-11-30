import { useEffect, useState } from "react";
import FeaturedSurvey from "./FeaturedSurvey";

const FSurvey = () => {

    const [featuredSurvey, setFeaturedSurvey] = useState([]);

    useEffect(()=>{
        fetch('https://assignment-survey-resource-server.vercel.app/FeaturedSurvey')
        .then(res => res.json())
        .then(data => setFeaturedSurvey(data))
    }, [])

    return (
        <div>
            <h2 className="text-5xl text-center my-10 font-bold uppercase italic text-orange-600">Our Featured Survey</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    featuredSurvey?.map(featured => <FeaturedSurvey key={featured.id} featured={featured}></FeaturedSurvey>)
                }
            </div>
        </div>
    );
};

export default FSurvey;