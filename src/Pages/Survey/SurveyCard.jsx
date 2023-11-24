/* eslint-disable react/prop-types */

const SurveyCard = ({survey}) => {

    const {title, description, voted} = survey || {}

  return (
    <div className="">
        <div className="card bg-base-100 h-full shadow-xl">
            <div className="card-body">
              <h2 className="text-2xl italic font-bold">{title}</h2>
              <p>{description}</p>
              <p className="font-bold">Total Voted: {voted}</p>
            </div>
        </div>
    </div>
  );
};

export default SurveyCard;
