import { Link, useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";

const SurveyDetails = () => {
  const survey = useLoaderData();
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();

  // const {id} = useParams();
  // const [surveydtl, setSurveyDtl] = useState([]);

  return (
    <div>
        <div className="card bg-base-100 shadow-xl flex justify-evenly items-center"> 
            <div className="card-body">
              <h2 className="text-3xl font-bold uppercase italic">{survey.title}</h2>
              <p className="w-2/4">{survey.description}</p>
            </div>

            <div className="my-10">
                <form onSubmit={handleSubmit}>
                    
                    <div>
                        <h2>Have you visited this destination?</h2>
                        <select defaultValue="default"
                            {...register("vote", {required: true})}
                            className="select select-bordered w-full font-bold">
                            <option disabled value="default">Vote</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div>
                        <h2>Would you recommends it to others?</h2>
                        <select defaultValue="default"
                            {...register("vote", {required: true})}
                            className="select select-bordered w-full font-bold">
                            <option disabled value="default">Vote</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>

                    <div className="mt-10 justify-end">
                        <button className="btn bg-green-400 text-white uppercase font-bold italic">Submit</button>
                    </div>
                </form>
                
            </div>
        </div>
        <Link to="/survey">
          <button className="btn mt-10 bg-orange-500 text-white uppercase italic font-bold">Back</button>
        </Link>
    </div>
  );
};

export default SurveyDetails;
