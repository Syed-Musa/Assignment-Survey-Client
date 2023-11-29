import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateVoted = () => {
    const {_id, register, handleSubmit } = useForm();
    const { title, voted, description, Add_vote, Add_vote2, image} = useLoaderData();
    
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async(data) => {
        console.log(data);
        const imageFile = {image: data?.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
            'content-type': 'multipart/form-data'
        }
        });
  
        if(res?.data.success){
            const surveyItem = {
                title: data?.title,
                Add_vote: data?.Add_vote,
                Add_vote2: data?.Add_vote,
                description: data?.description,
                voted: data?.voted,
                image: res.data?.data?.display_url
            }
            const surveyResponse = await axiosSecure.patch(`/survey/${_id}`, surveyItem);
            console.log(surveyResponse.data);
            if(surveyResponse?.data?.modifiedCount > 0){
            // reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${data.title} is updated on Voted Now!`,
              showConfirmButton: false,
              timer: 1200
            });
          }
        }
        console.log('image url successfully', res.data)
    };

    return (
        <div>
            <h2 className="text-5xl text-center mt-10 font-bold uppercase italic text-orange-600">Update Voted</h2>

            <div className="my-10 ml-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-5">
                        <label className="label">
                          <span className="label-text font-bold italic">Title</span>
                        </label>
                        <input 
                        type="text" 
                        defaultValue={title}
                        placeholder="Add title" 
                        {...register('title', {required: true})}
                        required
                        className="input input-bordered w-full" />
                    </div>
    
                    <div className="flex gap-4">
                        <select defaultValue={Add_vote} {...register('Add_vote', {required: true})} className="select select-bordered w-full">
                            <option disabled value="default" >Have you visited this destination?</option>
                            <option className="font-bold" value="yes">Yes</option>
                            <option className="font-bold" value="no">No</option>
                        </select>
    
                        <select defaultValue={Add_vote2} {...register('Add_vote2', {required: true})} className="select select-bordered w-full">
                            <option disabled selected >Would you recommends it to others?</option>
                            <option className="font-bold" value="yes">Yes</option>
                            <option className="font-bold" value="no">No</option>
                        </select>
                    </div>
    
    
                    <div className="form-control">
                        <label className="label">
                          <span className="label-text font-bold italic">Description</span>
                        </label>
                        <textarea defaultValue={description} {...register('description', {required: true})} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </div>
    
                    <div>
                      <label className="label">
                        <span className="label-text font-bold italic">Most Voted</span>
                      </label>
                      <input defaultValue={voted} {...register('voted', {required: true})} type="number" className="border-2 border-gray-800 p-3 text-xl" />
                    </div>
    
                    <div className="form-control w-full my-6">
                      <input defaultValue={image} {...register('image', {required: true})} type="file" className="file-input w-full max-w-xs font-bold" />
                    </div>
                    <button className="btn bg-orange-500 font-bold uppercase italic text-white mt-2">Update Voted</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateVoted;