import { Link, useLoaderData, useParams } from "react-router-dom";
// import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const SurveyDetails = () => {
  const survey = useLoaderData();
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();

  // const {id} = useParams();
  // const [surveydtl, setSurveyDtl] = useState([]);

    const onSubmit = async(data) =>{
        console.log(data);
        const imageFile = {image: data?.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });


        if(res.data.success){
            const surveyItem = {
                Add_vote: data?.Add_vote,
                Add_vote2: data?.Add_vote,
            }
            const surveyResponse = await useAxiosSecure.post('/survey', surveyItem);
            console.log(surveyResponse.data);
            if(surveyResponse?.data?.insertedId){
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.title} details updated!`,
                showConfirmButton: false,
                timer: 1200
              });
            }
        }
    }

  return (
    <div>
        <Helmet>
            <title>SURVEYPOLLING | SURVEY DETAILS</title>
        </Helmet>
        <div className="card bg-base-100 shadow-xl flex justify-evenly items-center"> 
            <div className="card-body">
              <h2 className="text-3xl font-bold uppercase italic">{survey.title}</h2>
              <p className="w-2/4">{survey.description}</p>
            </div>

            <div className="my-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <h2>Have you visited this destination?</h2>
                        <select defaultValue="default"
                            {...register("Add_vote", {required: true})}
                            className="select select-bordered w-full font-bold">
                            <option disabled value="default">Vote</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div>
                        <h2>Would you recommends it to others?</h2>
                        <select defaultValue="default"
                            {...register("Add_vote2", {required: true})}
                            className="select select-bordered w-full font-bold">
                            <option disabled value="default">Vote</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>

                    <div className="form-control w-full my-6">
                        <input {...register('image', {required: true})} type="file" className="file-input w-full max-w-xs font-bold" />
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
