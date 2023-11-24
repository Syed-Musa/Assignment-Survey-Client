/* eslint-disable react/prop-types */

const FeaturedSurvey = ({featured}) => {

    const { title, description} = featured || {}

  return (
    <div>
        <div className="card bg-base-100 h-full shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold italic">{title}</h2>
              <p>{description}</p>
            </div>
        </div>
    </div>
  );
};

export default FeaturedSurvey;
