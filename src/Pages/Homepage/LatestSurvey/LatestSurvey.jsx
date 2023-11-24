/* eslint-disable react/prop-types */

const LatestSurvey = ({latest}) => {

    const {title, description} = latest || {}

  return (
    <div>
        <div className="card bg-base-100 shadow-xl h-full">
            <div className="card-body">
              <h2 className="font-bold italic text-2xl">{title}</h2>
              <p>{description}</p>
              
            </div>
        </div>
    </div>
  );
};

export default LatestSurvey;
