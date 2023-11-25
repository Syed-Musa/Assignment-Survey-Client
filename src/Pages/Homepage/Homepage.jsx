import {Helmet} from "react-helmet-async";
import Banner from "./Banner/Banner";
import FSurvey from "./FeaturedSurvey/FSurvey";
import LSurvey from "./LatestSurvey/LSurvey";
import FAq from "./FAQ/FAQ";
import Testimoniel from "./Testimoniel/Testimoniel";

const Homepage = () => {
    return (
        <div>
            <Helmet>
                <title>SURVEYPOLLING | HOME</title>
            </Helmet>
            <Banner></Banner>
            <FSurvey></FSurvey>
            <LSurvey></LSurvey>
            <Testimoniel></Testimoniel>
            <FAq></FAq>
        </div>
    );
};

export default Homepage;