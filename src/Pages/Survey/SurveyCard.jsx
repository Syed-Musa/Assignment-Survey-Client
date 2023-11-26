/* eslint-disable react/prop-types */
import {Helmet} from "react-helmet-async";
import { Link } from "react-router-dom";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";

const SurveyCard = ({survey}) => {

    const {_id, title, description, voted} = survey || {}

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
              <div className="flex text-2xl">
                <p><BiSolidLike></BiSolidLike></p>
                <p><BiSolidDislike></BiSolidDislike></p>
              </div>
            </div>
            <div className="text-center">
              <Link to={`/survey/${_id}`}><button className="btn bg-orange-500 text-white my-5 font-bold uppercase italic">Detials</button></Link>
            </div>
        </div>
    </div>
  );
};

export default SurveyCard;
