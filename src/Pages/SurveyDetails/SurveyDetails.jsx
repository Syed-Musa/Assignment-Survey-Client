import { Link } from "react-router-dom";

const SurveyDetails = () => {
    return (
        <div>
            <h2>This is a survey details page</h2>
            <Link to='/survey'><button className="btn bg-orange-500 text-white uppercase italic font-bold">Back</button></Link>
        </div>
    );
};

export default SurveyDetails;