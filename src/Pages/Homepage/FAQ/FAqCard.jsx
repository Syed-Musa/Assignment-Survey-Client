/* eslint-disable react/prop-types */

const FAqCard = ({faq}) => {

    const {Ques, Ans} = faq || {}

  return (
    <div>
        <div className="bg-base-100">
            <div className="card-body">
              <h2 className="font-bold uppercase italic">{Ques}</h2>
              <p>{Ans}</p>
              
            </div>
        </div>
    </div>
  );
};

export default FAqCard;
