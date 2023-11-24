import Banner from "./Banner/Banner";
import FSurvey from "./FeaturedSurvey/FSurvey";
import LSurvey from "./LatestSurvey/LSurvey";

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <FSurvey></FSurvey>
            <LSurvey></LSurvey>
        </div>
    );
};

export default Homepage;