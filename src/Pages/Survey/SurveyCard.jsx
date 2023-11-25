/* eslint-disable react/prop-types */
import {Helmet} from "react-helmet-async";
import { Link } from "react-router-dom";

const SurveyCard = ({survey}) => {

    const {title, description, voted} = survey || {}

  return (
    <div className="">
      <Helmet>
        <title>SURVEYPOLLING | SURVEY</title>
      </Helmet>
        <div className="card bg-base-100 h-full shadow-xl">
            <div className="card-body">
              <h2 className="text-2xl italic font-bold">{title}</h2>
              <p>{description}</p>
              <p className="font-bold">Total Voted: {voted}</p>
            </div>
            <div className="text-center">
              <Link to='/surveyDetails'><button className="btn bg-orange-500 text-white my-5 font-bold uppercase italic">Detials</button></Link>
            </div>
        </div>
    </div>
  );
};

export default SurveyCard;
